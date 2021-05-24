(function() {
  $(".js-range-slider").ionRangeSlider({
    type: "single",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: false,
    extra_classes: 'single-slider',
    //hide_from_to: true,
    onChange: function(data) {
      console.log(data.from);
    }
  });
})();
