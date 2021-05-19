(function() {
  let mouseup = false;


  $('.toggle').mouseup(function(e) {
    mouseup = true;
    $(this).removeClass('focused');
  });

  $('.toggle__input').focus(function(e) {
      if (!mouseup) {
        $(this).parent().addClass('focused');
      }
      mouseup = false;
  });

  $('.toggle__input').blur(function(e) {
    $(this).parent().removeClass('focused');
  });
})();
