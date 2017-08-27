var section = document.querySelector('section');

var retrieveData = 'https://raw.githubusercontent.com/okayauco/flashcards/master/sandbox/vocab-sandbox.json';
var request = new XMLHttpRequest();
request.open('GET', retrieveData);
request.responseType = 'json';
request.send();

request.onload = function() {
  var vocabWords = request.response;
  showWords(JSON.parse(vocabWords));
};

function showWords(jsonObj) {
  var words = jsonObj['vocabulary'];

  for (var i = 0; i < words.length; i++) {
    var theArticle = document.createElement('article');
    var inEnglish = document.createElement('div');
    var inRomaji = document.createElement('div');
    var inHiragana = document.createElement('div');
    var inKanji = document.createElement('div');

    inEnglish.textContent = words[i].English;
    inRomaji.textContent = words[i].Romaji;
    inHiragana.textContent = words[i].Hiragana;
    inKanji.textContent = words[i].Kanji;

    theArticle.appendChild(inEnglish);
    theArticle.appendChild(inRomaji);
    theArticle.appendChild(inHiragana);
    theArticle.appendChild(inKanji);

    section.appendChild(theArticle);
  }
}