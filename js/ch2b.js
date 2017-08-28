var defaultWord = {English: "English", Japanese: "日本語"}

$('.englishVocab').text(defaultWord.English);
$('.japaneseVocab').text(defaultWord.Japanese);

$('div.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

addEventListener("keydown", function(event) {
  var vocabWords = [{English: "go", Romaji: "ikimasu", Hiragana: "いきます", Kanji: "行きます"},
                      {English: "come", Romaji: "kimasu", Hiragana: "きます", Kanji: "来ます"},
                      {English: "eat", Romaji: "tabemasu", Hiragana: "たべます", Kanji:"食べます"},
                      {English: "drink", Romaji: "nomimasu", Hiragana: "のみます", Kanji: "飲みます"},
                      {English: "speak", Romaji: "hanashimasu", Hiragana: "はなします", Kanji: "話します"},
                      {English: "listen", Romaji: "kikimasu", Hiragana: "ききます", Kanji: "聞きます"},
                      {English: "read", Romaji: "yomimasu", Hiragana: "よみます", Kanji: "読みます"},
                      {English: "write", Romaji: "kakimasu", Hiragana: "かきます", Kanji: "書きます"},
                      {English: "watch", Romaji: "mimasu", Hiragana: "みます", Kanji: "見ます"},
                      {English: "sleep", Romaji: "nemasu", Hiragana: "ねます", Kanji: "寝ます"},
                      {English: "study", Romaji: "benkyoo shimasu", Hiragana: "べんきょうします", Kanji: "勉強します"},
                      {English: "to hang out/play", Romaji: "asobimasu", Hiragana: "あそびます", Kanji: "遊びます"},
                      {English: "from ~", Romaji: "~kara", Hiragana: "~から", Kanji: ""},
                      {English: "to ~", Romaji: "~made", Hiragana: "~まで", Kanji: ""},
                      {English: "year (at college)", Romaji: "nensei", Hiragana: "ねんせい", Kanji: "年生"},
                      {English: "bus", Romaji: "basu", Hiragana: "ばす", Kanji: ""},
                      {English: "train", Romaji: "densha", Hiragana: "でんしゃ", Kanji: ""},
                      {English: "home", Romaji: "uchi", Hiragana: "うち", Kanji: ""},
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
