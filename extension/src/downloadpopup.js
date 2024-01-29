document.addEventListener('DOMContentLoaded', function () {
    // Get parameters from the background script
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        document.getElementById('filename').innerText = message.filename;
        document.getElementById('reason').innerText = message.reason;

        // Add click event listeners to the resume and cancel buttons
        document.getElementById('resume').addEventListener('click', function () {
            chrome.downloads.resume(message.downloadId);
            window.close();
        });

        document.getElementById('cancel').addEventListener('click', function () {
            chrome.downloads.cancel(message.downloadId);
            window.close();
        });
    });
});
