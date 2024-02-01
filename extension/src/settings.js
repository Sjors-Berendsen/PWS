document.addEventListener('DOMContentLoaded', function () {

    // Blocked Sites
    const yourSitesTab = document.getElementById('your-sites-tab');
    const standardSitesTab = document.getElementById('standard-sites-tab');
    const blockedSitesList = document.getElementById('blocked-sites-list');
    const newSiteInput = document.getElementById('new-site-input');
    const addSiteButton = document.getElementById('add-site-button');
    const removeSiteButton = document.getElementById('remove-site-button');
    newSiteInput.value = '';
    // Load Your Blocked Sites on page load
    loadBlockedSites('your-sites');
  
    yourSitesTab.addEventListener('click', function () {
      loadBlockedSites('your-sites');
    });
  
    standardSitesTab.addEventListener('click', function () {
      loadBlockedSites('standard-sites');
    });
  
    addSiteButton.addEventListener('click', function () {
      const newSite = newSiteInput.value.trim();
      if (newSite) {
        addBlockedSite(newSite);
      }
    });
  
    removeSiteButton.addEventListener('click', function () {
      const selectedSite = getSelectedSite();
      if (selectedSite) {
        removeBlockedSite(selectedSite);
      }
    });
  
    // Function to load blocked sites based on the tab
    function loadBlockedSites(tab) {
      const sitesKey = tab === 'your-sites' ? 'yourBlockedSites' : 'standardBlockedSites';
      chrome.storage.local.get([sitesKey], function (result) {
        const blockedSites = result[sitesKey] || [];
  
        blockedSitesList.innerHTML = ''; // Clear the previous content
  
        if (blockedSites.length > 0) {
          blockedSites.forEach(site => {
            const listItem = createBlockedSiteItem(site);
            blockedSitesList.appendChild(listItem);
          });
        } else {
          blockedSitesList.textContent = 'No blocked sites.';
        }
      });
    }
  
    // Function to add a blocked site
    function addBlockedSite(site) {
      chrome.storage.local.get(['yourBlockedSites'], function (result) {
        const yourBlockedSites = result.yourBlockedSites || [];
        yourBlockedSites.push(site);
  
        chrome.storage.local.set({ 'yourBlockedSites': yourBlockedSites }, function () {
          loadBlockedSites('your-sites');
          newSiteInput.value = ''; // Clear the input field
        });
      });
    }
  
    // Function to remove a blocked site
    function removeBlockedSite(site) {
        chrome.storage.local.get(['yourBlockedSites'], function (result) {
          const yourBlockedSites = result.yourBlockedSites || [];
          const updatedSites = yourBlockedSites.filter(s => s !== site);
      
          chrome.storage.local.set({ 'yourBlockedSites': updatedSites }, function () {
            loadBlockedSites('your-sites'); // Reload the list after removing a site
            newSiteInput.value = ''; // Clear the input field
          });
        });
      }
      
  
    // Function to create a blocked site list item
    function createBlockedSiteItem(site) {
        const listItem = document.createElement('div');
        listItem.textContent = site;
        
        // Add a click event listener to handle selection
        listItem.addEventListener('click', function () {
          // Remove the selected class from all items
          const allItems = blockedSitesList.querySelectorAll('div');
          allItems.forEach(item => item.classList.remove('selected'));
      
          // Add the selected class to the clicked item
          listItem.classList.add('selected');
      
          // Set the selected site in the input field
          newSiteInput.value = site;
        });
      
        return listItem;
      }
  
    // Function to get the selected blocked site from the list
    function getSelectedSite() {
      const selectedElement = blockedSitesList.querySelector('.selected');
      return selectedElement ? selectedElement.textContent : null;
    }


    const blockedExtensionsList = document.getElementById('blocked-extensions-list');
    const newExtensionInput = document.getElementById('new-extension-input');
    const addExtensionButton = document.getElementById('add-extension-button');
    const removeExtensionButton = document.getElementById('remove-extension-button');
    newExtensionInput.value = '';
    loadBlockedExtensions();

    addExtensionButton.addEventListener('click', function () {
        const newExtension = newExtensionInput.value.trim();
        if (newExtension) {
            addBlockedExtension(newExtension);
        }
    });

    removeExtensionButton.addEventListener('click', function () {
        const selectedExtension = getSelectedExtension();
        if (selectedExtension) {
            removeBlockedExtension(selectedExtension);
        }
    });

    function loadBlockedExtensions() {
        chrome.storage.local.get(['extensiontypes'], function (result) {
            const blockedExtensions = result.extensiontypes || [];

            blockedExtensionsList.innerHTML = ''; // Clear the previous content

            if (blockedExtensions.length > 0) {
                blockedExtensions.forEach(extension => {
                    const listItem = createBlockedExtensionItem(extension);
                    blockedExtensionsList.appendChild(listItem);
                });
            } else {
                blockedExtensionsList.textContent = 'No blocked file extensions.';
            }
        });
    }

    function addBlockedExtension(extension) {
        chrome.storage.local.get(['extensiontypes'], function (result) {
            const blockedExtensions = result.extensiontypes || [];
            blockedExtensions.push(extension);

            chrome.storage.local.set({ 'extensiontypes': blockedExtensions }, function () {
                loadBlockedExtensions();
                newExtensionInput.value = ''; // Clear the input field
            });
        });
    }

    function removeBlockedExtension(extension) {
        chrome.storage.local.get(['extensiontypes'], function (result) {
            const blockedExtensions = result.extensiontypes || [];
            const updatedExtensions = blockedExtensions.filter(e => e !== extension);

            chrome.storage.local.set({ 'extensiontypes': updatedExtensions }, function () {
                loadBlockedExtensions(); // Reload the list after removing an extension
                newExtensionInput.value = ''; // Clear the input field
            });
        });
    }

    function createBlockedExtensionItem(extension) {
        const listItem = document.createElement('div');
        listItem.textContent = extension;

        listItem.addEventListener('click', function () {
            const allItems = blockedExtensionsList.querySelectorAll('div');
            allItems.forEach(item => item.classList.remove('selected'));

            listItem.classList.add('selected');
            newExtensionInput.value = extension;
        });

        return listItem;
    }

    function getSelectedExtension() {
        const selectedElement = blockedExtensionsList.querySelector('.selected');
        return selectedElement ? selectedElement.textContent : null;
    }
  });