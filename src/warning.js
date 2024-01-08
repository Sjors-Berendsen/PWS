document.addEventListener('DOMContentLoaded', function () {
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString).get('url');
  const originalUrl = decodeURIComponent(urlParam);

  const bypassKey = 'bypass';

  chrome.storage.local.get([bypassKey], function (result) {
    const bypass = result[bypassKey] || false;

    document.getElementById('proceed-button').addEventListener('click', function () {
      // Go back to Google
      chrome.tabs.update({ url: 'https://www.google.com' });

      // Set bypass to false
      chrome.storage.local.set({ [bypassKey]: false });
    });

    document.getElementById('load-original-button').addEventListener('click', function () {
      if (!bypass) {
        // Set bypass to true
        chrome.storage.local.set({ [bypassKey]: true });

        // Notify the background script to load the original URL
        chrome.runtime.sendMessage({ loadOriginalUrl: originalUrl });
      } else {
        // Display a message or take appropriate action when trying to bypass multiple times
        console.log('Bypass already used.');
      }
    });
  });
});
