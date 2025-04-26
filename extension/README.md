Equity Knowledge Hub is a lightweight Chrome extension that streamlines private-equity research by scraping any webpage’s visible text and using your OpenAI API key to generate concise, actionable investment reports. Simply install the extension, enter your API key, browse to a target company or news page, and click “Generate”, the tool transforms fragmented financial data into clear insights on business models, key metrics, risks, and growth opportunities, helping PE professionals make faster, more informed decisions.

# Steps for using Equity Knowledge Hub chatGPT

## Installation
1. Download the Equity Knowledge Hub ChatGPT Chrome Extension from the Chrome Web Store (link to be provided).
2. Install the extension by following the on-screen instructions.
3. After installation, you will see a bot icon in your Chrome browser's extension area.

## Configuration
1. Click on the Equity Knowledge Hub ChatGPT icon in your Chrome browser to open the extension's settings.
2. In the settings, enter your OpenAI API key and write what you would like to gather from the page.
3. Save your settings to enable the generation.

## Usage
1. Navigate to a page that you want to gather insights.
2. Click on the Equity Knowledge Hub ChatGPT icon in your Chrome browser.
3. The extension will read the page and use your saved API key and info to generate the personalized report.


# Prototype Status & Next Steps
## Prototype:

- Works in development, but production API key is currently not functioning (429 errors during testing).

- Key handling is insecure in-browser; for a robust demo you’d move calls to a backend proxy to protect secrets and avoid CORS.

## Next Improvements:

- Backend proxy (Node.js/Express) to securely call the OpenAI API

- Structured prompts: let users select which PE report sections (e.g. Financials, Risks)

- Custom data extraction: target tables or JSON from investor data sites


### This prototype demonstrates the core concept: scrape → AI-driven analysis → actionable output, giving private equity teams a potential edge in a data-scarce market segment.
