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

  $('<div/>', {
    'class': 'preloader'
  }).css({
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'width': '100vw',
    'height': '100vh',
    'background-color': '#fff',
    'z-index': '3000'
  }).appendTo('html');


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
      "language": {
        "noResults": function(){
            return 'Ничего не найдено';
        },
        searching: function() {
          return "Загрузка...";
        }
      }
      //searchInputPlaceholder: 'My custom placeholder...'
    });

    $('.js-select-combo').on('select2:open', function() {
      $('.select2-search input').off('input', checkInput);
      $('.select2-search input').on('input', checkInput);
    });

    $('.js-select-combo').on('select2:closing', function() {
      $('.select2-search input').removeClass('inputed');
    });





    $('.js-select-combo-open').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Введите или выберите вариант",
      dropdownCssClass: ['select-dropdown', 'select-dropdown-multi', 'select-dropdown--opened'],
      "language": {
        "noResults": function(){
            return 'Ничего не найдено';
        },
        searching: function() {
          return "Загрузка...";
        }
      },
      //searchInputPlaceholder: 'My custom placeholder...'
    }).on("select2:closing", function(e) {
      e.preventDefault();
    }).on("select2:closed", function(e) {
        list.select2("open");
    });

    $('.js-select-combo-open').select2('open');
    $('.select-dropdown-multi input').on('input', checkInput);





    $('.js-select-combo-searching').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Введите или выберите вариант",
      dropdownCssClass: [
        'select-dropdown',
        'select-dropdown--opened',
        'select-dropdown--searching'
      ],
      "language": {
        "noResults": function(){
            return 'Ничего не найдено';
        },
        searching: function() {
          return "Загрузка...";
        }
      },
      ajax: {
        delay: 500000000,
        url: 'https://antibreez.github.io/select-data/select-data.json',
      }
      //searchInputPlaceholder: 'My custom placeholder...'
    }).on("select2:closing", function(e) {
      e.preventDefault();
    }).on("select2:closed", function(e) {
        list.select2("open");
    });

    var event = new Event('input', {
      bubbles: true,
      cancelable: true,
    });

    $('.js-select-combo-searching').select2('open');
    setTimeout(function() {
      if ($('.select-dropdown--searching input')[0]) {
        $('.select-dropdown--searching input')[0].dispatchEvent(event);
      }
    }, 500);




    $('.js-select-combo-not-found').select2({
      //minimumResultsForSearch: Infinity
      dropdownCssClass: ['select-dropdown', 'select-dropdown--opened', 'select-dropdown--not-found'],
      "language": {
        "noResults": function(){
            return 'Ничего не найдено';
        },
        searching: function() {
          return "Загрузка...";
        }
      }
      //searchInputPlaceholder: 'My custom placeholder...'
    }).on("select2:closing", function(e) {
      e.preventDefault();
    }).on("select2:closed", function(e) {
        list.select2("open");
    });

    $('.js-select-combo-not-found').select2('open');
    $('.select-dropdown--not-found input').val('фывапа');

    if ($('.select-dropdown--not-found input')[0]) {
      $('.select-dropdown--not-found input')[0].dispatchEvent(event);
    }



    $('.js-select-single').select2({
      placeholder: "Выберите вариант",
      minimumResultsForSearch: Infinity,
      dropdownCssClass: ['select-dropdown','select-dropdown--single']
    })

    var list = $(".js-select-single-open").select2({
      placeholder: "Выберите вариант",
      minimumResultsForSearch: Infinity,
      dropdownCssClass: [
        'select-dropdown',
        'select-dropdown--single',
        'select-dropdown--opened'
      ],
      closeOnSelect: false
    }).on("select2:closing", function(e) {
        e.preventDefault();
    }).on("select2:closed", function(e) {
        list.select2("open");
    });

    list.select2('open');







    $('.js-select-multi').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Выберите варианты",
      dropdownCssClass: [
        'select-dropdown',
        'select-dropdown-multi'
      ],
      "language": {
        "noResults": function(){
            return 'Ничего не найдено';
        },
        searching: function() {
          return "Загрузка...";
        }
      }
      //searchInputPlaceholder: 'My custom placeholder...'
    });

    $('.js-select-multi').on('select2:open', function() {
      $('.select2-search input').off('input', checkInput);
      $('.select2-search input').on('input', checkInput);
    });

    $('.js-select-multi').on('select2:closing', function() {
      $('.select2-search input').removeClass('inputed');
    });


    $('.js-select-multi-open').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Выберите варианты",
      maximumSelectionLength: 3,
      dropdownCssClass: [
        'select-dropdown',
        'select-dropdown--opened',
        'select-dropdown-multi'
      ],
      "language": {
        "noResults": function(){
            return 'Ничего не найдено';
        },
        searching: function() {
          return "Загрузка...";
        },
        maximumSelected: function (e) {
          return "Макс. количество вариантов - " + e.maximum;
        },
      }
      //searchInputPlaceholder: 'My custom placeholder...'
    }).on("select2:closing", function(e) {
       e.preventDefault();
    }).on("select2:closed", function(e) {
        list.select2("open");
    });

    $('.js-select-multi-open').select2('open');









    $('.js-select-multi-searching').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Выберите варианты",
      dropdownCssClass: [
        'select-dropdown',
        'select-dropdown--opened',
        'select-dropdown--searching-multi'
      ],
      "language": {
        "noResults": function(){
            return 'Ничего не найдено';
        },
        searching: function() {
          return "Загрузка...";
        }
      },
      ajax: {
        delay: 500000000,
        url: 'https://antibreez.github.io/select-data/select-data.json',
      }
      //searchInputPlaceholder: 'My custom placeholder...'
    }).on("select2:closing", function(e) {
      e.preventDefault();
    }).on("select2:closed", function(e) {
        list.select2("open");
    });

    var event = new Event('input', {
      bubbles: true,
      cancelable: true,
    });

    $('.js-select-multi-searching').select2('open');
    setTimeout(function() {
      if ($('.select-dropdown--searching-multi  input')[0]) {
        $('.select-dropdown--searching-multi  input')[0].dispatchEvent(event);
      }
    }, 500);









    $('.js-select-multi-not-found').select2({
      //minimumResultsForSearch: Infinity
      dropdownCssClass: [
        'select-dropdown',
        'select-dropdown--opened',
        'select-dropdown--not-found-multi'
      ],
      "language": {
        "noResults": function(){
            return 'Ничего не найдено';
        },
        searching: function() {
          return "Загрузка...";
        }
      }
      //searchInputPlaceholder: 'My custom placeholder...'
    }).on("select2:closing", function(e) {
      e.preventDefault();
    }).on("select2:closed", function(e) {
        list.select2("open");
    });

    $('.js-select-multi-not-found').select2('open');
    $('.select-dropdown--not-found-multi input').val('фывапа');

    $('.select-dropdown--not-found-multi input')[0]
      && $('.select-dropdown--not-found-multi input')[0].dispatchEvent(event);

  });





  if ($('.main-nav__link--active').text() == 'Формы') {
    setTimeout(function() {
      window.scrollTo(0,0);
      $('.preloader').hide();
    }, 1000)
  } else {
    $('.preloader').hide();
  }


  // $('#your-select-id').one('select2:open', function(e) {
  //   $('input.select2-search__field').prop('placeholder', 'enter username or city');
  // });
})();
