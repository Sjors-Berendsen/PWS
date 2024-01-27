function addButton() {
  const addCustomButton = () => {
    const buttonContainer = document.querySelector('.G-tF');
    console.log(buttonContainer);

    // Check if the button container is found
    if (buttonContainer) {
      // Check if the button is already present
      if (!buttonContainer.querySelector('button[data-custom-button="added"]')) {
        // Create the button element
        const customButton = document.createElement('button');
        customButton.textContent = 'scan for scam';
        customButton.setAttribute('data-custom-button', 'added'); // Add a data attribute to mark the button

        // Add click event listener to the button
        customButton.addEventListener('click', (event) => {
          // Check if the clicked element is the custom button
          if (event.target === customButton) {
            // Your button click logic here
            console.log('Button clicked!');
          }
        });

        // Append the button to the container
        buttonContainer.appendChild(customButton);
      }
    }
  };

  // Check if the DOM is ready before adding the button
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCustomButton);
  } else {
    addCustomButton();
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'addButton') {
    addButton();
  }
});
