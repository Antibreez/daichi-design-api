(function() {
  let mouseup = false;


  $('.checkbox').mouseup(function(e) {
    mouseup = true;
    $(this).find('.checkbox__input').removeClass('focused');
  });

  $('.checkbox__input').focus(function(e) {
      if (!mouseup) {
        $(this).addClass('focused');
      }
      mouseup = false;
  });

  $('.checkbox__input').blur(function(e) {
    $(this).removeClass('focused');
  });
})();
