const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);
function divMaker(text){
  var div = document.createElement("div");
  var h2_question = document.createElement("h2");
  var h2_answer = document.createElement("h2");

  div.className = 'flashcard';

  h2_question.setAttribute('style', "border-top:1px solid red; paddin: 15px; margin-top:30px");

  h2_question.innerHTML = text.my_question;

  h2_answer.setAttribute("style", "text-align:center; display:none; color:red");
  h2_answer.innerHTML = text.my_answer;

  div.appendChild(h2_question);
  div.appendChild(h2_answer);

  div.addEventListener("click", function(){
    if(h2_answer.style.display == "none")
      h2_answer.style.display = "block";
    else
      h2_answer.style.display = "none";
  });

  flashcards.appendChild(div);
}

function submitted() {
  readJson();
}

function addFlashcard(){
  var flashcard_info = {
    'my_question' : question.value,
    'my_answer' : answer.value
  }

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  divMaker(contentArray[contentArray.length - 1]);
  question.value = '';
  answer.value = '';
}

function delFlashcards(){
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
}

function showCreateCardBox(){
  createBox.style.display = "block";
}

function hideCreateBox(){
  createBox.style.display = "none";
}

//create a user-defined function to download JSON file 
function exportToJsonFile() {
  let dataStr = localStorage.getItem('items');
  let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  let exportFileDefaultName = 'data.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}

function readJson() {
   var fileToLoad = document.getElementById("jsonFile").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
      var textFromFileLoaded = fileLoadedEvent.target.result;
      localStorage.setItem('items', textFromFileLoaded);
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}