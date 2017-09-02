var defaultWord = {English: "English", Japanese: "日本語"}

$('.englishVocab').text(defaultWord.English);
$('.japaneseVocab').text(defaultWord.Japanese);

$('div.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

var vocabWords = "";

var kanjiJ1 = "https://okayauco.github.io/flashcards/js/kanjiJ1.js";
$.getScript(getch5b, function() {
  $('.kanjiJ1').click(function (){
    vocabWords = kanjiJ1;
  });
});

var getch5b = "https://okayauco.github.io/flashcards/js/ch5b.js";
$.getScript(getch5b, function() {
  $('.ch5b').click(function (){
    vocabWords = ch5b;
  });
});

var getch2a = "https://okayauco.github.io/flashcards/js/ch2a.js";
$.getScript(getch2a, function() {
  $('.ch2a').click(function (){
    vocabWords = ch2a;
  });
});

var getch2b = "https://okayauco.github.io/flashcards/js/ch2b.js";
$.getScript(getch2b, function() {
  $('.ch2b').click(function (){
    vocabWords = ch2b;
  });
});

addEventListener("keydown", function(event) {
  if (event.keyCode == 32)
    $('div.cardTemplate').toggleClass('flipped');
  else if (event.keyCode == 39) {

  function getRandomIntInc(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
      //The maximum is inclusive and the minimum is inclusive
    }

    var maxInt = vocabWords.length;
    var i = getRandomIntInc(0,maxInt);

    $('.englishVocab').text(vocabWords[i].English);
    $('.japaneseVocab').html(vocabWords[i].Romaji +"<br />" + vocabWords[i].Hiragana +"<br />" + vocabWords[i].Kanji);

  }
  else if (event.keyCode == 37) {
    $('.englishVocab').text(defaultWord.English);
    $('.japaneseVocab').text(defaultWord.Japanese);
  }
  else {
    alert('You\'ve gon\' an\' done somefink off it now here')
  }
});
