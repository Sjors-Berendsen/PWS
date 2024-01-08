chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const url = new URL(details.url);
    const fullDomain = url.hostname;
    const mainDomain = getMainDomain(fullDomain);
  
    const bypassKey = 'bypass';
  
    // Check local blacklist
    chrome.storage.local.get(['yourBlockedSites', bypassKey], function (result) {
      const localBlacklist = result.yourBlockedSites || [];
      const bypass = result[bypassKey] || false;
  
      if (localBlacklist.includes(fullDomain) || localBlacklist.includes(mainDomain)) {
        if (bypass===false) {

  
          // Redirect to warning page
          const warningUrl = chrome.runtime.getURL(`warning.html?url=${encodeURIComponent(details.url)}`);
          chrome.tabs.update(details.tabId, { url: warningUrl });
        } else if (bypass==true) {
          // Display a message or take appropriate action when trying to bypass multiple times
                // Set bypass to false
                chrome.storage.local.set({ [bypassKey]: false });
        }
      }
    });
  });
  
  // Function to get the main domain (without subdomains)
  function getMainDomain(domain) {
    const parts = domain.split('.');
    if (parts.length > 2) {
      return parts.slice(1).join('.');
    } else {
      return domain;
    }
  }
  