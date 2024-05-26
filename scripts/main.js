// send code 2 content script 4 execution
function sendCodeToContentScript(code) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "executeCode", code: code});
  });
}

sendCodeToContentScript("document.body.style.backgroundColor = 'yellow';");
