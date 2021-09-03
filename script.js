var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#inputText");
var outputText = document.querySelector("#outputText");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler() {
  console.log("Error Orccured", error);
  alert("SomeThing Went Wrong Please Try Again Later");
}

btnTranslate.addEventListener("click", function eventhandler() {
  var inputTxt = inputText.value;

  fetch(getTranslationURl(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
});

btnTranslate = addEventListener("click", btnTranslate);
