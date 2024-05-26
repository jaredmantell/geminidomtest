function sendMessageToBackground(message) {
    chrome.runtime.sendMessage({ action: "sendToGemini", data: { message: message }}, function(response) {
      console.log('Response from background:', response.status);
    });
  }
  
  function getSelectedText() {
      const selection = window.getSelection();
      return selection.toString();
    }
    
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "getSelectedText") {
        const selectedText = getSelectedText();
        sendResponse({ text: selectedText });
      }
    });
  
  sendMessageToBackground("Hello from content script!");