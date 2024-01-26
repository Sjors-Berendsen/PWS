document.addEventListener('DOMContentLoaded', function () {
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString).get('url');
  const originalUrl = decodeURIComponent(urlParam);

    document.getElementById('proceed-button').addEventListener('click', function () {
      // Go back to Google
      chrome.tabs.update({ url: 'https://www.google.com' });

      // Set bypass to false
      chrome.storage.local.set({ [bypassKey]: false });
    });

    
});
