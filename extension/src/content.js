var toolbar = function() {
  var tb = $("[gh='mtb']");

  while($(tb).children().length === 1){
      tb = $(tb).children().first();
  }

  return tb;
};

var add_toolbar_button = function(content_html, onClickFunction, styleClass) {
  var basicLeftStyle = "lS ";
  var defaultLeftStyle = "T-I-ax7 L3";

  return create_generic_toolbar_button(content_html, onClickFunction, basicLeftStyle, defaultLeftStyle, styleClass, toolbar());
};

var create_generic_toolbar_button = function(content_html, onClickFunction, basicStyle, defaultStyle, styleClass, selector) {
  var container = $(document.createElement("div"));
  container.attr("class","G-Ni J-J5-Ji");

  var button = $(document.createElement("div"));
  var buttonClasses = "T-I J-J5-Ji gmailjs gmailjs-scan-button ";
  if(styleClass !== undefined &&
      styleClass !== null &&
      styleClass !== ""){
      buttonClasses += basicStyle+styleClass;
  }else{
      buttonClasses += basicStyle+defaultStyle;
  }
  button.attr("class", buttonClasses);
  button.attr("role", 'button')

  button.html(content_html);
  button.click(onClickFunction);

  var content = $(document.createElement("div"));
  content.attr("class","asa");

  container.html(button);

  selector.append(container);

  return container;
};

var email_subject = function () {
  var e = $(".hP");

  for(var i=0; i<e.length; i++) {
      if($(e[i]).is(":visible")) {
          return $(e[i]);
      }
  }

  return $();
};

var email_body = function() {
  return $(".a3s.aiL");
};

var checkbutton = function() {
  var hasScanButton = toolbar().children().find('div.gmailjs-scan-button').length > 0;
  return hasScanButton
}

function requestApi(string) {
  return new Promise((resolve, reject) => {
      fetch('http://localhost:333/process_string', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ input_string: string })
      })
      .then(response => response.json())
      .then(data => {
          resolve(data);
      })
      .catch(error => {
          console.error('Error:', error);
          reject(error);
      });
  });
}

async function processString(string) {
  try {
      const response = await requestApi(string);
      // Assuming the response has properties .a and .b, modify as needed
      const result = {
          a: response.a,
          b: response.b
      };
      return result;
  } catch (error) {
      console.error('Error processing string:', error);
      // You might want to handle the error or return a default object here
      return { a: 'err', b: 'err' };
  }
}



function addButton() {

if(!checkbutton()){
  add_toolbar_button(
    'Scan For Scam', 
    async function(){
      try{
        const subject = await email_subject().text().toString();
        try{
          var body = await email_body().text();
        }
        catch{
          var body = await email_body().html()
        }
        var body = await body.toString()
        if ((subject === undefined || subject === null || subject === ""||subject === " ") && (body === undefined || body === null || body === ""|| body === " ")){
          await chrome.runtime.sendMessage({ action: 'showErrorPopup' });
          return
        }
        const string = `subject: ${subject} message: ${body}`;
        var data = await  processString(string);
        await chrome.runtime.sendMessage({ action: 'showPopupWithData', data: data });
      }
      catch(error){
        console.log(error)
        chrome.runtime.sendMessage({ action: 'showErrorPopup' }); 
      }
      

  },
  undefined
  );
}
  

}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'addButton') {
    addButton();
  }
});