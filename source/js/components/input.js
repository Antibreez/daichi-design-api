(function() {
  $('.input-password-btn').on('click', function() {
    const $btn = $(this);
    const $input = $btn.prev();

    $btn.toggleClass('shown');

    if ($btn.hasClass('shown')) {
      $input.attr('type', 'text');
    } else {
      $input.attr('type', 'password');
    }
  })
})();
