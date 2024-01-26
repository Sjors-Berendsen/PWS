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
  