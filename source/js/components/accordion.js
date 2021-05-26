(function() {
  $('.accordion__btn').click(function() {
    $(this).siblings('.accordion__text').slideToggle(200);
    $(this).toggleClass('opened');
  });
})();
