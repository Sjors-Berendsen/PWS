function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value*100
  )}%`;
}



  

document.addEventListener('DOMContentLoaded', function () {
    // Get data from the background script
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        const gaugeElement = document.querySelector(".gauge");
        setGaugeValue(gaugeElement, request.percentage/100);
        // Set the message based on the class
        if (request.class === 0) {
            document.getElementById('message').textContent = 'This message is probably not a scam';
            document.body.style.backgroundColor = '#ccffcc'; // Light green background for class 0
        } else if (request.class === 1) {
            document.getElementById('message').textContent = 'This message is probably a scam';
            document.body.style.backgroundColor = '#ffcccc'; // Light red background for class 1
        }
    });
});
