$('.cardTemplate').click(function () {
  $(this).toggleClass('flipped');
});

$(window).keypress(function(e) {
<<<<<<< HEAD
  if (e.keyCord == 32) {
=======
  if (e.keyCode == 32) {
>>>>>>> 4e40eb77fdeb251a287e0b2186b07861671ef676
    $('.cardTemplate').toggleClass('flipped');
  }
});
