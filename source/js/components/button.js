(function() {
  const $btn = $('.forms__button-item--example .forms__btn');

  $btn.on('click', function() {
    const $btn = $(this);
    $btn.addClass('loading');
    $btn.attr('disabled', 'true');

    setTimeout(function() {
      $btn.removeClass('loading')
      $btn.addClass('success')
    }, 2000);

    setTimeout(function() {
      $btn.removeClass('success')
      $btn.removeAttr('disabled')
    }, 4000);
  });
})();
