$('.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

addEventListener("keydown", function(event) {
  if (event.keyCode == 32)
    $('.cardTemplate').toggleClass('flipped');
  else if (event.keyCode == 39) {
    function getRandomIntInc(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
      //The maximum is inclusive and the minimum is inclusive
    }

    var mathRandom = getRandomIntInc(0,4);

    $('.englishVocab').text('Hi I am replace');
    $('.japaneseVocab').text('こんにちわ');

  }
  else {
    alert('You\'ve gon\' an\' done somefink off it now here')
  }
});
