$('.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

$(window).keypress(function(event) {
  if (event.keyCode == 32) {
    $('.cardTemplate').toggleClass('flipped');
  }
});
