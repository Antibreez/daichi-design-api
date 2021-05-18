(function() {
  $('.tabs__button').on('click', function() {
    if (!$(this).hasClass('active') && !$(this).hasClass('disabled')) {
      $(this)
        .parents('.tabs')
        .find('.tabs__button')
        .removeClass('active');

      $(this).addClass('active');
    }
  });
})();
