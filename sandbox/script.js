var section = document.querySelector('section');

var retrieveData = 'https://raw.githubusercontent.com/okayauco/flashcards/master/sandbox/vocab-sandbox.json';
var request = new XMLHttpRequest();
request.open('GET', retrieveData);
request.responseType = 'JSON';
request.send();

request.onload = function() {
  var vocabWords = request.response;
  showWords(vocabWords);
}

function showWords(jsonObj) {
  var words = jsonObj['vocabulary'];

  for (var i = 0; i < words.length; i++) {
    var theArticle = document.createElement('article');
    var inEnglish = document.createElement('p');
    var inRomaji = document.createElement('p');
    var inHiragana = document.createElement('p');
    var inKanji = document.createElement('p');

    inEnglish.textContent = vocabulary[i].English;
    inRomaji.textContent = vocabulary[i].Romaji;
    inHiragana.textContent = vocabulary[i].Hiragana;
    inKanji.textContent = vocabulary[i].Kanji;
  }

  theArticle.appendChild(inEnglish);
  theArticle.appendChild(inRomaji);
  theArticle.appendChild(inHiragana);
  theArticle.appendChild(inKanji);

  section.appendChild(theArticle);
}
