(function() {
  // var Defaults = $.fn.select2.amd.require('select2/defaults');

  // $.extend(Defaults.defaults, {
  //     searchInputPlaceholder: ''
  // });

  // var SearchDropdown = $.fn.select2.amd.require('select2/dropdown/search');

  // var _renderSearchDropdown = SearchDropdown.prototype.render;

  // SearchDropdown.prototype.render = function(decorated) {

  //     // invoke parent method
  //     var $rendered = _renderSearchDropdown.apply(this, Array.prototype.slice.apply(arguments));

  //     this.$search.attr('placeholder', this.options.get('searchInputPlaceholder'));

  //     return $rendered;
  // };

  const checkInput = function(e) {
    if (e.target.value.length > 0) {
      $(e.target).addClass('inputed')
    } else {
      $(e.target).removeClass('inputed')
    }
  };

  $(document).ready(function() {
    $('.js-select-combo').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Введите или выберите вариант",
      dropdownCssClass: 'select-dropdown',
      //searchInputPlaceholder: 'My custom placeholder...'
    });

    $('.js-select-combo').on('select2:open', function() {
      $('.select2-search input').off('input', checkInput);
      $('.select2-search input').on('input', checkInput);
    });

    $('.js-select-combo').on('select2:closing', function() {
      $('.select2-search input').removeClass('inputed');
    })

  });




  // $('#your-select-id').one('select2:open', function(e) {
  //   $('input.select2-search__field').prop('placeholder', 'enter username or city');
  // });
})();
