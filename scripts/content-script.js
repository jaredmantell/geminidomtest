// Listener 4 messages from main.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "executeCode") {
      // Execute code
      eval(request.code);
    }
  });