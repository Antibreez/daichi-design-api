(function() {
  const $btn = $('.header__menu-btn');
  const $nav = $('.main-nav');
  const $blackout = $('.blackout');

  $btn.on('click', function() {
    $nav.toggleClass('js-opened');
    $blackout.toggleClass('js-show');

    if ($(document).width() <= 1199) {
      $nav.hasClass('js-opened')
      ? $('body').addClass('js__body-no-scroll')
      : $('body').removeClass('js__body-no-scroll')
    }
  });

  $blackout.on('click', function() {
    $nav.removeClass('js-opened');
    $blackout.removeClass('js-show');
    $('body').removeClass('js__body-no-scroll');
  });

  $(window).on('resize', function() {
    if ($(document).width() > 1199) {
      $nav.removeClass('js-opened');
      $blackout.removeClass('js-show');
      $('body').removeClass('js__body-no-scroll');
    }
  });
})();
