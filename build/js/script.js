"use strict";

/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */

/* Written by Andrew Stromnov (stromnov@gmail.com). */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["../widgets/datepicker"], factory);
  } else {
    // Browser globals
    factory(jQuery.datepicker);
  }
})(function (datepicker) {
  datepicker.regional.ru = {
    closeText: "Закрыть",
    prevText: "&#x3C;Пред",
    nextText: "След&#x3E;",
    currentText: "Сегодня",
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
  };
  datepicker.setDefaults(datepicker.regional.ru);
  return datepicker.regional.ru;
});

(function () {
  $('.dropdown:not(.dropdown-opened').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: ['calendar-dropdown']
  });
  $('.dropdown-opened').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: ['calendar-dropdown', 'calendar-dropdown-permanent']
  }).on("select2:closing", function (e) {
    e.preventDefault();
  }).on("select2:closed", function (e) {
    list.select2("open");
  });
  $('.dropdown').on('select2:close', function () {
    $(this).next().find('.select2-selection').blur();
  });
  $('.dropdown + .select2 .select2-selection__rendered').attr('tabindex', '-1');
  $('.dropdown-opened').select2('open');
})();

(function () {
  var selectOpt = {
    minimumResultsForSearch: Infinity,
    dropdownCssClass: 'calendar-dropdown'
  };
  $('.input-date').datepicker({
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    regional: 'ru',
    monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',
    beforeShow: function beforeShow() {
      setTimeout(function () {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },
    onChangeMonthYear: function onChangeMonthYear() {
      setTimeout(function () {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    }
  });
  $('.input-date-trigger').datepicker({
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    regional: 'ru',
    monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',
    onChangeMonthYear: function onChangeMonthYear() {
      setTimeout(function () {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },
    onSelect: function onSelect() {
      setTimeout(function () {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    }
  });
  $('.input-date-trigger-single').datepicker({
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    regional: 'ru',
    monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',
    onChangeMonthYear: function onChangeMonthYear() {
      setTimeout(function () {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },
    onSelect: function onSelect() {
      setTimeout(function () {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    }
  });
  $('.input-date-trigger-range').datepicker({
    range: 'period',
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    regional: 'ru',
    monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',
    onChangeMonthYear: function onChangeMonthYear() {
      setTimeout(function () {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },
    onSelect: function onSelect(input, inst) {
      console.log(inst);
      setTimeout(function () {
        $('.input-date-trigger-range').find('.ui-datepicker-month').select2(selectOpt);
        $('.input-date-trigger-range').find('.ui-datepicker-year').select2(selectOpt);
      }, 100);
    },
    beforeShow: function beforeShow(input, inst) {
      console.log(inst);
    }
  });
  var current = moment();
  var day = current.format('DD');
  var month = current.format('MM');
  var year = current.format('YYYY');
  var pickedDate = '';
  var pickedPeriod = [];
  var hoverDate = '';

  if (day !== '15') {
    pickedDate = 15 + '.' + month + '.' + year;
  } else {
    pickedDate = 17 + '.' + month + '.' + year;
  }

  if (day !== '13') {
    hoverDate = '13';
  } else {
    hoverDate = '12';
  }

  day > 15 ? pickedPeriod = ['02.' + month + '.' + year, '11.' + month + '.' + year] : pickedPeriod = ['17.' + month + '.' + year, '26.' + month + '.' + year];
  $('.input-date-trigger').datepicker('setDate', pickedDate);
  $('.input-date-trigger-single').datepicker('setDate', pickedDate);
  $('.input-date-trigger-range').datepicker('setDate', pickedPeriod);
  $('.input-date-trigger-single .ui-datepicker-calendar td a').each(function () {
    if ($(this).text() === hoverDate) {
      $(this).addClass('hovered');
    }
  });
  $('.ui-datepicker-month').select2(selectOpt);
  $('.ui-datepicker-year').select2(selectOpt);
  $('.input-date').datepicker('refresh');
  $('.input-date').inputmask("99.99.9999", {
    //mask: 'mm/dd/yyyy',
    placeholder: '',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true
  });
  $('.input-date').on('focus', function (e) {
    var target = $(e.target);
    var val = target.val();

    if (val.length === 0) {
      target.parent().addClass('date-placeholder');
    }
  });
  $('.input-date').on('blur', function (e) {
    var target = $(e.target);
    var val = target.val();
    target.parent().removeClass('date-placeholder');
  });
  $('.input-date').on('input', function (e) {
    var target = $(e.target);
    var val = target.val();

    if (val.length > 0) {
      target.parent().removeClass('date-placeholder');
    } else {
      target.parent().addClass('date-placeholder');
    }

    var isValid = moment($(this).val(), 'DD.MM.YYYY', true).isValid();

    if (isValid) {
      $(this).datepicker('hide');
      $(this).datepicker('show');
    }
  }); // $(document).ready(function() {
  //   function f1() {
  //     $('.input-date').datepicker('refresh');
  //   };
  //   function f2() {
  //     console.log($('.ui-datepicker-month')[0]);
  //     setTimeout(function() {
  //       $('.ui-datepicker-month').select2();
  //     }, 5000);
  //     //$('.ui-datepicker-month').select2();
  //   };
  //   var dfd = $.Deferred();
  //   dfd.done(f1).done(f2);
  //   dfd.resolve('a');
  // });

  $('#calendar-dropdown-month').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: ['calendar-dropdown', 'calendar-dropdown-permanent'],
    closeOnSelect: false
  }).on("select2:closing", function (e) {
    e.preventDefault();
  }).on("select2:closed", function (e) {
    list.select2("open");
  });
  $('#calendar-dropdown-month').select2('open');
  $('#calendar-dropdown-year').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: ['calendar-dropdown', 'calendar-dropdown-permanent'],
    closeOnSelect: false
  }).on("select2:closing", function (e) {
    e.preventDefault();
  }).on("select2:closed", function (e) {
    list.select2("open");
  });
  $('#calendar-dropdown-year').select2('open');
})();

(function () {
  $('.input-password-btn').on('click', function () {
    var $btn = $(this);
    var $input = $btn.prev();
    $btn.toggleClass('shown');

    if ($btn.hasClass('shown')) {
      $input.attr('type', 'text');
    } else {
      $input.attr('type', 'password');
    }
  });
})();

(function () {
  // const inputs = document.querySelectorAll('.input-phone');
  // if (!inputs[0]) {
  //   return;
  // }
  // const im = new Inputmask("+7(999) 999-99-99");
  // inputs.forEach(function(item) {
  //   im.mask(item);
  // })
  $('.input-phone').inputmask('+7(999) 999-99-99');
})();

(function () {
  var scrollBtn = document.querySelector('.scroll-to-top');
  var header = document.querySelector('.header');

  if (!scrollBtn) {
    return;
  }

  var getHeaderHeight = function getHeaderHeight() {
    return header.getBoundingClientRect().height + 50;
  };

  var isScrolled = window.pageYOffset > getHeaderHeight();

  var showBtn = function showBtn() {
    !scrollBtn.classList.contains('active') && scrollBtn.classList.add('active');
  };

  var hideHeader = function hideHeader() {
    scrollBtn.classList.contains('active') && scrollBtn.classList.remove('active');
  };

  var onScroll = function onScroll() {
    if (!isScrolled && window.pageYOffset > getHeaderHeight()) {
      showBtn();
      isScrolled = true;
    }

    if (isScrolled && window.pageYOffset < getHeaderHeight()) {
      hideHeader();
      isScrolled = false;
    }
  };

  if (isScrolled) {
    showBtn();
  }

  document.addEventListener('scroll', onScroll);
  scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();
    header.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
})();

(function () {
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
  var checkInput = function checkInput(e) {
    if (e.target.value.length > 0) {
      $(e.target).addClass('inputed');
    } else {
      $(e.target).removeClass('inputed');
    }
  };

  $(document).ready(function () {
    $('.js-select-combo').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Введите или выберите вариант",
      dropdownCssClass: 'select-dropdown',
      "language": {
        "noResults": function noResults() {
          return 'Ничего не найдено';
        },
        searching: function searching() {
          return "Загрузка...";
        }
      } //searchInputPlaceholder: 'My custom placeholder...'

    });
    $('.js-select-combo').on('select2:open', function () {
      $('.select2-search input').off('input', checkInput);
      $('.select2-search input').on('input', checkInput);
    });
    $('.js-select-combo').on('select2:closing', function () {
      $('.select2-search input').removeClass('inputed');
    });
    $('.js-select-combo-open').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Введите или выберите вариант",
      dropdownCssClass: ['select-dropdown', 'select-dropdown-multi', 'select-dropdown--opened'],
      "language": {
        "noResults": function noResults() {
          return 'Ничего не найдено';
        },
        searching: function searching() {
          return "Загрузка...";
        }
      } //searchInputPlaceholder: 'My custom placeholder...'

    }).on("select2:closing", function (e) {
      e.preventDefault();
    }).on("select2:closed", function (e) {
      list.select2("open");
    });
    $('.js-select-combo-open').select2('open');
    $('.select-dropdown-multi input').on('input', checkInput);
    $('.js-select-combo-searching').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Введите или выберите вариант",
      dropdownCssClass: ['select-dropdown', 'select-dropdown--opened', 'select-dropdown--searching'],
      "language": {
        "noResults": function noResults() {
          return 'Ничего не найдено';
        },
        searching: function searching() {
          return "Загрузка...";
        }
      },
      ajax: {
        delay: 500000000,
        url: 'https://antibreez.github.io/select-data/select-data.json'
      } //searchInputPlaceholder: 'My custom placeholder...'

    }).on("select2:closing", function (e) {
      e.preventDefault();
    }).on("select2:closed", function (e) {
      list.select2("open");
    });
    var event = new Event('input', {
      bubbles: true,
      cancelable: true
    });
    $('.js-select-combo-searching').select2('open');
    setTimeout(function () {
      $('.select-dropdown--searching input')[0].dispatchEvent(event);
    }, 500);
    $('.js-select-combo-not-found').select2({
      //minimumResultsForSearch: Infinity
      dropdownCssClass: ['select-dropdown', 'select-dropdown--opened', 'select-dropdown--not-found'],
      "language": {
        "noResults": function noResults() {
          return 'Ничего не найдено';
        },
        searching: function searching() {
          return "Загрузка...";
        }
      } //searchInputPlaceholder: 'My custom placeholder...'

    }).on("select2:closing", function (e) {
      e.preventDefault();
    }).on("select2:closed", function (e) {
      list.select2("open");
    });
    $('.js-select-combo-not-found').select2('open');
    $('.select-dropdown--not-found input').val('фывапа');
    $('.select-dropdown--not-found input')[0].dispatchEvent(event);
    $('.js-select-single').select2({
      placeholder: "Выберите вариант",
      minimumResultsForSearch: Infinity,
      dropdownCssClass: ['select-dropdown', 'select-dropdown--single']
    });
    var list = $(".js-select-single-open").select2({
      placeholder: "Выберите вариант",
      minimumResultsForSearch: Infinity,
      dropdownCssClass: ['select-dropdown', 'select-dropdown--single', 'select-dropdown--opened'],
      closeOnSelect: false
    }).on("select2:closing", function (e) {
      e.preventDefault();
    }).on("select2:closed", function (e) {
      list.select2("open");
    });
    list.select2('open');
  }); // $('#your-select-id').one('select2:open', function(e) {
  //   $('input.select2-search__field').prop('placeholder', 'enter username or city');
  // });
})();