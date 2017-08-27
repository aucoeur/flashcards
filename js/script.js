$('.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

$(window).keypress(function(e) {
  if (e.keyCord == 32) {
    $('.cardTemplate').toggleClass('flipped');
  }
});
