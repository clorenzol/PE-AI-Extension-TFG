import React, { useEffect, useState } from "react";
import "./Generator.css";
import { VscGear } from "react-icons/vsc";
import { ROUTES } from "../utils/routes";
import { loadData } from "../utils/localStorage";
import { postChatGPTMessage } from "../utils/chatGPTUtils";

function Generator({ setPage, openAIKey }) {
  const [isLoading, setIsLoading] = useState(false);
  const [pageContent, setPageContent] = useState("");
  const [infoPage, setInfoPage] = useState("");

  useEffect(() => {
    const fetchPageContent = async () => {
      const content = await loadData("pageContent");
      setPageContent(content);
    };
    fetchPageContent();
  }, []);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const message = `Generate a private equity report based on the information of the page:\n\n${pageContent}`;
      const chatGPTResponse = await postChatGPTMessage(message, openAIKey);
      console.log("ChatGPT response:", chatGPTResponse);
      setInfoPage(chatGPTResponse);
    } catch (error) {
      console.error("Error generating report:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <button
          onClick={() => handleGenerate()}
          className="generate-btn"
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
        <h2 className="title">Private Equity Info Generator</h2>
        <button
          onClick={() => setPage(ROUTES.PROFILE)}
          className="settings-btn"
        >
          <VscGear />
        </button>
      </div>
      <div className="textarea-container">
        <textarea
          rows={12}
          className="output-textarea"
          placeholder="Generated Information"
          value={infoPage}
          readOnly
        />
      </div>
    </div>
  );
}

export default Generator;
