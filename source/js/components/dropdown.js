(function () {
  $('.dropdown:not(.dropdown-opened').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: ['calendar-dropdown'],
  });

  $('.dropdown-opened').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: ['calendar-dropdown', 'calendar-dropdown-permanent'],
  }).on("select2:closing", function(e) {
    e.preventDefault();
  }).on("select2:closed", function(e) {
    list.select2("open");
  });

  $('.dropdown').on('select2:close', function() {
    $(this).next().find('.select2-selection').blur();
  });

  $('.dropdown + .select2 .select2-selection__rendered').attr('tabindex', '-1');
  $('.dropdown-opened').select2('open')
})();
