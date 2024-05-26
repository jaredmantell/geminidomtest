// send messages to the background script
function sendMessageToBackground(message) {
  chrome.runtime.sendMessage({ action: "sendToGemini", data: { message: message }}, function(response) {
    console.log('Response from background:', response.status);
  });
}

// Function to get selected text from the webpage
function getSelectedText() {
  const selection = window.getSelection();
  return selection.toString();
}

// Listener for messages from the background script requesting selected text
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSelectedText") {
    const selectedText = getSelectedText();
    sendResponse({ text: selectedText });
    return true;  // indicates that the response is sent asynchronously
  }
});

// Example of using the function to send a message when the script is loaded
sendMessageToBackground("Hello from content script!");
