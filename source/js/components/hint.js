(function() {
  $('.hint-positions__tip-icon').on('click', function() {
    $(this).next().addClass('show');
  });

  $('.hint__close').on('click', function() {
    const hint = $(this).parent();

    if (!hint.hasClass('hint-permanent')) {
      hint.removeClass('show');
    }
  });
})();
