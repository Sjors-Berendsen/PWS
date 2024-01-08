document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the current state from local storage
  chrome.storage.local.get(['enabled'], function (result) {
    const isEnabled = result.enabled || false;
    updateButtonStyle(isEnabled);
  });

  // Handle button click event
  document.getElementById('enable-button').addEventListener('click', function () {
    // Toggle the state
    chrome.storage.local.get(['enabled'], function (result) {
      const isEnabled = !result.enabled || false;
      updateButtonStyle(isEnabled);

      // Save the updated state to local storage
      chrome.storage.local.set({ 'enabled': isEnabled });
    });
  });

  // Function to update the button style based on the state
  function updateButtonStyle(isEnabled) {
    const button = document.getElementById('enable-button');
    button.textContent = isEnabled ? 'Enabled' : 'Disabled';
    button.classList.remove(isEnabled ? 'disabled' : 'enabled');
    button.classList.add(isEnabled ? 'enabled' : 'disabled');
    document.body.style.backgroundColor = isEnabled ? '#e0f7fa' : '#ffccbc'; // Change background color based on state
  }

  // Handle settings button click event
  document.getElementById('settings-button').addEventListener('click', function () {
    openSettingsPage();
  });
    // Function to open the settings page
    function openSettingsPage() {
      chrome.tabs.create({ url: 'settings.html' });
    }

});



