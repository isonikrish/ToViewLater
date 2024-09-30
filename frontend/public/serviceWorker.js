// Listen for messages (for URL fetching or other tasks)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getCurrentUrl') {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
          const currentTab = tabs[0];
          sendResponse({ url: currentTab.url });
      });
      return true; // Indicates that the response is asynchronous
  }
});

// Set panel behavior to open the side panel when the action button is clicked
chrome.sidePanel
.setPanelBehavior({ openPanelOnActionClick: true })
.catch((error) => {
  console.error('Error setting panel behavior:', error);
});
