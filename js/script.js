var defaultWord = {English: "English", Japanese: "日本語"}

$('.englishVocab').text(defaultWord.English);
$('.japaneseVocab').text(defaultWord.Japanese);

$('div.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

addEventListener("keydown", function(event) {
  var vocabWords = [{English: "go", Romaji: "ikimasu (iku)", Hiragana: "いきます", Kanji: "行きます"},
                    {English: "come", Romaji: "kimasu", Hiragana: "きます", Kanji: "来ます"},
                    {English: "eat", Romaji: "tabemasu", Hiragana: "たべます", Kanji:"食べます"}
                  ]

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
    $('.japaneseVocab').html(vocabWords[i].Romaji +" <br /> " + vocabWords[i].Hiragana +" | " + vocabWords[i].Kanji);

  }
  else if (event.keyCode == 37) {
    $('.englishVocab').text(defaultWord.English);
    $('.japaneseVocab').text(defaultWord.Japanese);
  }
  else {
    alert('You\'ve gon\' an\' done somefink off it now here')
  }
});
