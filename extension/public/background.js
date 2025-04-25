/*global chrome*/

console.log("Background script loaded");

// This function grabs all visible text content from the page body.
function grabPageTextContent() {
  const bodyText = document.body?.innerText || "";
  const cleanedText = bodyText.replace(/\s\s+/g, " ").trim();
  console.log("cleanedText:", cleanedText);
  return cleanedText;
}

// Listen for tab updates and run the script when the page is fully loaded.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("Event listener triggered");

  if (
    changeInfo.status === "complete" &&
    tab.active &&
    tab.url?.startsWith("http")
  ) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        func: grabPageTextContent,
      })
      .then((queryResult) => {
        if (queryResult && queryResult[0]) {
          const content = queryResult[0].result;
          chrome.storage.local.set({ pageContent: content }, () => {
            console.log("Page content saved:", content);
          });
        } else {
          console.warn("No result returned from script.");
        }
      })
      .catch((error) => {
        console.error("Error executing script:", error);
      });
  }
});
