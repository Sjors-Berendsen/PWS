var harmfulFileTypes = ['.exe', '.bat', '.cmd', '.js', '.vbs', '.ps1', '.jar', '.msi', '.dll', '.scr'];

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const url = new URL(details.url);
    const fullDomain = url.hostname;
    const mainDomain = getMainDomain(fullDomain);
  
   
  
    // Check local blacklist
    chrome.storage.local.get(['yourBlockedSites'], function (result) {
      const enabled = chrome.storage.local.get(['enabled']);
      if (enabled){
        const localBlacklist = result.yourBlockedSites || [];
  
      if (localBlacklist.includes(fullDomain) || localBlacklist.includes(mainDomain)/**add logic for our blacklist too */) {
          // Redirect to warning page
          const warningUrl = chrome.runtime.getURL(`warning.html?url=${encodeURIComponent(details.url)}`);
          chrome.tabs.update(details.tabId, { url: warningUrl });
      }}});
  
  }
);
  
  // Function to get the main domain (without subdomains)
  function getMainDomain(domain) {
    const parts = domain.split('.');
    if (parts.length > 2) {
      return parts.slice(1).join('.');
    } else {
      return domain;
    }
  }
 
  
chrome.webNavigation.onCompleted.addListener((details) =>{
  const url = new URL(details.url);
  if (url.hostname === 'mail.google.com') {
    // Execute content script to add button
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'addButton' });
    });
  }
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  const url = new URL(details.url);
  // Check if the URL is on mail.google.com
  if (url.hostname === 'mail.google.com') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'addButton' });
    });
  }
});


chrome.runtime.onInstalled.addListener(function(details) {
  console.log(details.reason)
  if (details.reason === "install") {
    // Open the thank you screen on installation
    chrome.tabs.create({url: chrome.runtime.getURL('thankyou.html')});
  }
});

chrome.downloads.onChanged.addListener(function (item) {
  console.log(item)
  for (var i = 0; i < harmfulFileTypes.length; i++) {
      var filetype = harmfulFileTypes[i];

      // Check if the file extension is in the list or if it has an LRM in the name
      if (item.filename.current.endsWith(filetype) || item.filename.current.includes('\u200E')) {
          // Pause download and show download popup
          showDownloadPopup(item);
          chrome.downloads.pause(item.id);
          break;
      }
  }
});

function showDownloadPopup(item) {
  // Create a new window for the download popup
  chrome.windows.create({
      url: chrome.runtime.getURL('downloadpopup.html'),
      type: 'popup',
      width: 400,
      height: 300
  }, function (window) {
      // Wait for the window to finish loading before sending the message
      chrome.tabs.onUpdated.addListener(function onUpdated(tabId, changeInfo) {
          if (tabId === window.tabs[0].id && changeInfo.status === 'complete') {
              // Send message to the popup window
              chrome.tabs.sendMessage(tabId, {
                  filename: item.filename.current,
                  reason: item.filename.current.includes('\u200E') ? 'LRM' : item.filename.current.split('.').pop(),
                  downloadId: item.id
              });

              // Remove the listener after sending the message
              chrome.tabs.onUpdated.removeListener(onUpdated);
          }
      });
  });
}


