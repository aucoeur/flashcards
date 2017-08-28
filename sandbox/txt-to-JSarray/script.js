function autoMagical() {
  var regEx = /(^.+$)\n(^.+$)\n(^.+$)\n(^.+$)\n/gm;
  var subStr = `{English: "$1", Romaji: "$2", Hiragana: "$3", Kanji: "$4"},`;

  var inputText = document.getElementById("rawText").value;
  var convertedText = inputText.replace(regEx, subStr);

  document.getElementById("results").innerHTML = convertedText;
}
