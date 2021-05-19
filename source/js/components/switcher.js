(function() {
  let mouseup = false;


  $('.switcher__label').mouseup(function(e) {
    mouseup = true;
    $(this).removeClass('focused');
  });

  $('.switcher__input').focus(function(e) {
      if (!mouseup) {
        $(this).parent().addClass('focused');
      }
      mouseup = false;
  });

  $('.switcher__input').blur(function(e) {
    $(this).parent().removeClass('focused');
  });


  $('.switcher-text__label').mouseup(function(e) {
    mouseup = true;
    $(this).removeClass('focused');
  });

  $('.switcher-text__input').focus(function(e) {
      if (!mouseup) {
        $(this).parent().addClass('focused');
      }
      mouseup = false;
  });

  $('.switcher-text__input').blur(function(e) {
    $(this).parent().removeClass('focused');
  });


  $('.switcher-icon__label').mouseup(function(e) {
    mouseup = true;
    $(this).removeClass('focused');
  });
})();
