(function() {
  $(".js-range-single-slider").ionRangeSlider({
    type: "single",
    grid: false,
    hide_min_max: true,
    extra_classes: 'single-slider',
  });

  $(".js-range-single-slider-default").ionRangeSlider({
    type: "single",
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    extra_classes: 'single-slider',
  });

  $(".js-range-single-slider-hovered").ionRangeSlider({
    type: "single",
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    extra_classes: 'single-slider',
    onStart: function(data) {
      data.slider.find('.irs-handle').addClass('hovered');
    }
  });

  $(".js-range-single-slider-focused").ionRangeSlider({
    type: "single",
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    extra_classes: 'single-slider',
    onStart: function(data) {
      data.slider.find('.irs-handle').addClass('focused');
    }
  });


  $(".js-range-double-slider").ionRangeSlider({
    type: "double",
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    extra_classes: 'double-slider',
    onStart: function(data) {
      const inputBlock = data.slider.parent();
      const from = inputBlock.siblings('.range__value--from');
      const to = inputBlock.siblings('.range__value--to');
      from.text(data.from);
      to.text(data.to);
    },
    onChange: function(data) {
      const inputBlock = data.slider.parent();
      const from = inputBlock.siblings('.range__value--from');
      const to = inputBlock.siblings('.range__value--to');
      from.text(data.from);
      to.text(data.to);
    }
  });


  $(".js-range-double-slider-hovered").ionRangeSlider({
    type: "double",
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    extra_classes: 'double-slider',
    onStart: function(data) {
      data.slider.find('.irs-handle.to').addClass('hovered');
    },
  });

  let mouseup = false;

  $('.irs-line').on('mouseup', function() {
    mouseup = true;
    $(this).parent().siblings('.irs-handle').removeClass('focused');
  });

  $('.irs-line').on('mousedown', function() {
    $(this).parent().siblings('.irs-handle').removeClass('focused');
  });

  $('.irs-handle').on('mouseup', function() {
    mouseup = true;
    $(this).removeClass('focused');
  });

  $('.irs-handle').on('mousedown', function() {
    mouseup = true;
    $(this).removeClass('focused');
  });

  $('.irs-line').on('focus', function() {
    if (!mouseup) {
      $(this).parent().siblings('.irs-handle').addClass('focused');
    }

    mouseup = false;
  });

  $('.irs-line').on('blur', function() {
    $(this).parent().siblings('.irs-handle').removeClass('focused');
  })
})();
