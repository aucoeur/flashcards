var defaultWord = {English: "English", Japanese: "日本語"}

$('.englishVocab').text(defaultWord.English);
$('.japaneseVocab').text(defaultWord.Japanese);

$('div.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

var ch2a = [{English: "a little", Romaji: "chotto", Hiragana: "ちょっと", Kanji: ""},
              {English: "It really helps", Romaji: "tasukarimasu", Hiragana: "たすかります", Kanji: ""},
              {English: "together", Romaji: "isshoni", Hiragana: "いっしょに", Kanji:""},
              {English: "here", Romaji: "koko", Hiragana: "ここ", Kanji: ""},
              {English: "there", Romaji: "soko", Hiragana: "そこ", Kanji: ""},
              {English: "over there", Romaji: "asoko", Hiragana: "あそこ", Kanji: ""},
              {English: "where", Romaji: "doko", Hiragana: "どこ", Kanji: ""},
              {English: "Where is it?", Romaji: "Doko desu ka?", Hiragana: "どこですか", Kanji: ""},
              {English: "this one", Romaji: "kore", Hiragana: "これ", Kanji: ""},
              {English: "that one(near listener)", Romaji: "sore", Hiragana: "それ", Kanji: ""},
              {English: "that one(over there)", Romaji: "are", Hiragana: "あれ", Kanji: ""},
              {English: "this", Romaji: "kono", Hiragana: "この", Kanji: ""},
              {English: "that(near listener) ~", Romaji: "sono", Hiragana: "その", Kanji: ""},
              {English: "that(over there)", Romaji: "ano", Hiragana: "あの", Kanji: ""},
              {English: "which", Romaji: "dono", Hiragana: "どの", Kanji: ""},
              {English: "white", Romaji: "shiroi", Hiragana: "しろい", Kanji: "白い"},
              {English: "university", Romaji: "daigaku", Hiragana: "だいがく", Kanji: "大学"},
              {English: "student", Romaji: "gakusei", Hiragana: "がくせい", Kanji: "学生"},
              {English: "bag", Romaji: "kaban", Hiragana: "かばん", Kanji: ""},
          ];
var ch2b = [{English: "go", Romaji: "ikimasu", Hiragana: "いきます", Kanji: "行きます"},
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
            ];

var vocabWords = "";

$('.ch2a').click(function (){
    vocabWords= ch2a;
  console.log(vocabWords)
});

$('.ch2b').click(function (){
    vocabWords= ch2b;
  console.log(vocabWords)
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
