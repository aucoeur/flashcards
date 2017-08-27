$('.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

$(window).keypress(function(e) {
  if (e.keyCode == 32) {
    $('.cardTemplate').toggleClass('flipped');
});
