var card = document.querySelector('.card');
var cardNumber = 1;
const question = document.getElementById('front');
const answer = document.getElementById('back');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

setCard(contentArray[cardNumber - 1]);

function setCard(text) {
  question.innerHTML = text.my_question;
  answer.innerHTML = text.my_answer;
}

function submitted() {
  readJson();
  setCard(contentArray[cardNumber - 1]);
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

function nextCard() {
  cardNumber += 1;
  setCard(contentArray[cardNumber - 1]);
}

function previousCard() {
  cardNumber -= 1;
  setCard(contentArray[cardNumber - 1]);
}