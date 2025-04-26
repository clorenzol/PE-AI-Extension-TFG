import axios from 'axios';

const CHATGPT_END_POINT = 'https://api.openai.com/v1/chat/completions';
const CHATGPT_MODEL     = 'gpt-3.5-turbo';
const MAX_RETRIES       = 5;
const INITIAL_DELAY_MS  = 1000; // 1 second

/**
 * Post a message to the ChatGPT API, retrying on 429 with back-off.
 * @param {string} message – The user’s prompt.
 * @param {string} apiKey  – Your OpenAI API key.
 * @returns {string|null}  – The assistant’s reply, or null on unrecoverable error.
 */
export const postChatGPTMessage = async (message, apiKey) => {
  const config = {
    headers: { Authorization: `Bearer ${apiKey}` },
  };
  const payload = {
    model:    CHATGPT_MODEL,
    messages: [{ role: 'user', content: message }],
  };

  let attempt = 0;
  let delay   = INITIAL_DELAY_MS;

  while (attempt < MAX_RETRIES) {
    try {
      const res = await axios.post(CHATGPT_END_POINT, payload, config);
      return res.data.choices[0].message.content;
    } catch (err) {
      const status = err.response?.status;
      if (status === 429 && attempt < MAX_RETRIES - 1) {
        // Check for Retry-After header (in seconds); fallback to exponential delay.
        const retryAfter = parseInt(err.response.headers['retry-after'], 10);
        const waitMs = !isNaN(retryAfter)
          ? retryAfter * 1000
          : delay;

        console.warn(
          `Rate limit hit (429). Retrying in ${waitMs} ms… (attempt ${attempt + 1} of ${MAX_RETRIES})`
        );
        await new Promise(r => setTimeout(r, waitMs));

        attempt += 1;
        delay *= 2;
        continue;
      }

      // For non-429 or exhausted retries, log and bail.
      console.error('OpenAI API error', {
        status: status,
        message: err.response?.data?.error?.message || err.message
      });
      return null;
    }
  }

  console.error(`Failed after ${MAX_RETRIES} attempts due to rate limits.`);
  return null;
};
