"use strict";

(function () {
  var $btn = $('.forms__button-item--example .forms__btn');
  $btn.on('click', function () {
    var $btn = $(this);
    $btn.addClass('loading');
    $btn.attr('disabled', 'true');
    setTimeout(function () {
      $btn.removeClass('loading');
      $btn.addClass('success');
    }, 2000);
    setTimeout(function () {
      $btn.removeClass('success');
      $btn.removeAttr('disabled');
    }, 4000);
  });
})();

(function () {
  var mouseup = false;
  $('.checkbox').mouseup(function (e) {
    mouseup = true;
    $(this).find('.checkbox__input').removeClass('focused');
  });
  $('.checkbox__input').focus(function (e) {
    if (!mouseup) {
      $(this).addClass('focused');
    }

    mouseup = false;
  });
  $('.checkbox__input').blur(function (e) {
    $(this).removeClass('focused');
  });
})();
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
  $('.link[tabindex="-1"]').on('click', function (e) {
    e.preventDefault();
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
  var mouseup = false;
  $('.switcher__label').mouseup(function (e) {
    mouseup = true;
    $(this).removeClass('focused');
  });
  $('.switcher__input').focus(function (e) {
    if (!mouseup) {
      $(this).parent().addClass('focused');
    }

    mouseup = false;
  });
  $('.switcher__input').blur(function (e) {
    $(this).parent().removeClass('focused');
  });
  $('.switcher-text__label').mouseup(function (e) {
    mouseup = true;
    $(this).removeClass('focused');
  });
  $('.switcher-text__input').focus(function (e) {
    if (!mouseup) {
      $(this).parent().addClass('focused');
    }

    mouseup = false;
  });
  $('.switcher-text__input').blur(function (e) {
    $(this).parent().removeClass('focused');
  });
  $('.switcher-icon__label').mouseup(function (e) {
    mouseup = true;
    $(this).removeClass('focused');
  });
})();

(function () {
  $('.tabs__button').on('click', function () {
    if (!$(this).hasClass('active') && !$(this).hasClass('disabled')) {
      $(this).parents('.tabs').find('.tabs__button').removeClass('active');
      $(this).addClass('active');
    }
  });
})();

(function () {
  var uploads = document.querySelectorAll('.upload');

  if (!uploads[0]) {
    return;
  }

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ;

  function highlight(e) {
    e.currentTarget.classList.add('highlight');
  }

  ;

  function unhighlight(e) {
    e.currentTarget.classList.remove('highlight');
  }

  ;

  function getResultBlock(input) {
    var $idx = $(input).parent().attr('data-input');
    return $(input).parents('.upload').find("[data-result='" + $idx + "']");
  }

  ;

  function fillResult(input) {
    var $result = getResultBlock(input);
    var $name = $result.find('.upload__name');
    $name.text(input.files[0].name);
  }

  ;

  function showResult(input) {
    var $result = getResultBlock(input);
    $result.addClass('show');
  }

  ;

  function hideResult(input) {
    var $result = getResultBlock(input);
    $result.removeClass('show');
  }

  ;

  function showLabel(input) {
    var $label = $(input).parent();
    $label.removeClass('hidden');
  }

  ;

  function hideLabel(input) {
    var $label = $(input).parent();
    $label.addClass('hidden');
  }

  ;

  function addLoader(input) {
    var $result = getResultBlock(input);
    $result.addClass('loader');
  }

  ;

  function removeLoader(input) {
    var $result = getResultBlock(input);
    $result.removeClass('loader');
  }

  ;

  var readUrl = function readUrl(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onloadstart = function (e) {
        //progress.classList.add('show');
        addLoader(input);
        fillResult(input);
        showResult(input);
      };

      reader.onprogress = function (e) {};

      reader.onload = function (e) {
        // fileImg.setAttribute('src', e.target.result);
        // fileName.textContent = input.files[0].name;
        // !fileResult.classList.contains('show') && fileResult.classList.add('show');
        // progress.classList.remove('show');
        // bar.style.width = 0;
        removeLoader(input);
        hideLabel(input);
        var block = $(input).parents('.upload');

        if (block.hasClass('multi')) {
          var newIdx = $('.upload__input-wrap .upload__label').length;
          var $result = getResultBlock(input);
          var $resultWrap = $result.parent();
          var $newResult = $result.clone(true, true);
          $newResult.removeClass('show'); //$newResult.attr('data-result', newIdx);

          $resultWrap.prepend($newResult);
          $result.parents('.upload__input-results').find('.upload__result').each(function (id, element) {
            $(this).attr('data-result', id);
          });
          var $labelWrap = $(input).parent().parent();
          var $label = $(input).parent();
          var $newLabel = $label.clone(true, true);
          $newLabel.removeClass('hidden'); //$newLabel.attr('data-input', newIdx);

          $labelWrap.prepend($newLabel);
          $label.parents('.upload__input-wrap').find('.upload__label').each(function (id, element) {
            $(this).attr('data-input', id);
            $(this).children('input').attr('name', 'file-' + id);
          });
          addEventListeners($newLabel, $newResult); // $newLabel.children('input')[0].addEventListener('change', onFileChange);
          // ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
          //   $newLabel[0].addEventListener(eventName, preventDefaults, false)
          // });
          // ['dragenter', 'dragover'].forEach(eventName => {
          //   $newLabel[0].addEventListener(eventName, highlight, false)
          // });
          // ['dragleave', 'drop'].forEach(eventName => {
          //   $newLabel[0].addEventListener(eventName, unhighlight, false)
          // });
          // $newLabel[0].addEventListener('drop', handleDrop, false);
          // $newResult.children('.upload__close')[0].addEventListener('click', onFileClear);
        }
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  var onFileChange = function onFileChange(e) {
    readUrl(e.currentTarget);
    console.log(e.currentTarget);
  };

  function onFileDrop(input) {
    readUrl(input);
  }

  ;

  function handleDrop(e) {
    var dt = e.dataTransfer;
    var files = dt.files;
    var target = e.currentTarget;
    var input = target.querySelector('input');

    if (input.files && input.files[0]) {
      input.value = '';

      if (!/safari/i.test(navigator.userAgent)) {
        input.type = '';
        input.type = 'file';
      } // fileResult.classList.remove('show');
      // fileName.textContent = '';
      // fileImg.removeAttribute('src');

    }

    input.files = files;
    onFileDrop(input); //handleFiles(files)
  }

  ;

  function setIds(result, idx) {
    result.parents('.upload').find('.upload__label').each(function (id, element) {
      if (id > idx) {
        var newId = id - 1;
        $(this).attr('data-input', newId);
        $(this).children('input').attr('name', 'file-' + newId);
      } else {
        $(this).attr('data-input', id);
        $(this).children('input').attr('name', 'file-' + id);
      }
    });
    result.parents('.upload').find('.upload__result').each(function (id, element) {
      if (id > idx) {
        $(this).attr('data-result', id - 1);
      } else {
        $(this).attr('data-result', id);
      }
    });
  }

  ;

  function onFileClear(e) {
    var $target = $(e.currentTarget);
    var $result = $target.parents('.upload__result');
    var $idx = $result.attr('data-result');
    var $label = $result.parents('.upload').find("[data-input='" + $idx + "']");
    var input = $label.children('input')[0];
    var $block = $target.parents('.upload');

    if ($block.hasClass('multi')) {
      setIds($result, $idx);
      $result.remove();
      $label.remove();
    } else {
      input.value = '';

      if (!/safari/i.test(navigator.userAgent)) {
        input.type = '';
        input.type = 'file';
      }

      $label.removeClass('hidden');
      $result.removeClass('show');
    }
  }

  function addEventListeners($inputLabel, $result) {
    // const fileLabel = $(block).find("[data-input='" + idx +"']")[0];
    // const fileInput = $(fileLabel).find('input')[0];
    // const fileResult = $(block).find("[data-result='" + idx +"']")[0];
    // const fileClearBtn = $(fileResult).find('.upload__close')[0];
    var input = $inputLabel.children('input')[0];
    var inputLabel = $inputLabel[0];
    var fileClearBtn = $result.find('.upload__close')[0];
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
      inputLabel.addEventListener(eventName, preventDefaults, false);
    });
    ['dragenter', 'dragover'].forEach(function (eventName) {
      inputLabel.addEventListener(eventName, highlight, false);
    });
    ['dragleave', 'drop'].forEach(function (eventName) {
      inputLabel.addEventListener(eventName, unhighlight, false);
    });
    inputLabel.addEventListener('drop', handleDrop, false);
    input.addEventListener('change', onFileChange);
    fileClearBtn.addEventListener('click', onFileClear);
  } // function removeEventListeners(block, idx) {
  //   const fileLabel = $(block).find("[data-input='" + idx +"']")[0];
  //   const fileInput = $(fileLabel).find('input')[0];
  //   ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  //     fileLabel.removeEventListener(eventName, preventDefaults, false)
  //   });
  //   ['dragenter', 'dragover'].forEach(eventName => {
  //     fileLabel.removeEventListener(eventName, highlight, false)
  //   });
  //   ['dragleave', 'drop'].forEach(eventName => {
  //     fileLabel.removeEventListener(eventName, unhighlight, false)
  //   })
  //   fileLabel.removeEventListener('drop', handleDrop, false);
  //   fileInput.removeEventListener('change', onFileChange);
  // }


  uploads.forEach(function (upload) {
    var $inputLabel = $(upload).find('.upload__label');
    var $result = $(upload).find('.upload__result');

    if (!$(upload).hasClass('disabled')) {
      addEventListeners($inputLabel, $result);
    } // // Сбрасываем стандартные события при перетаскивании файла
    // ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    //   fileLabel.addEventListener(eventName, preventDefaults, false)
    // });
    // // Добавляем стили при перетаскивании файла над нужной областью
    // ['dragenter', 'dragover'].forEach(eventName => {
    //   fileLabel.addEventListener(eventName, highlight, false)
    // });
    // ['dragleave', 'drop'].forEach(eventName => {
    //   fileLabel.addEventListener(eventName, unhighlight, false)
    // })
    // //
    // fileLabel.addEventListener('drop', handleDrop, false);
    // fileInput.addEventListener('change', onFileChange);

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
      if ($('.select-dropdown--searching input')[0]) {
        $('.select-dropdown--searching input')[0].dispatchEvent(event);
      }
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

    if ($('.select-dropdown--not-found input')[0]) {
      $('.select-dropdown--not-found input')[0].dispatchEvent(event);
    }

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
    $('.js-select-multi').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Выберите варианты",
      dropdownCssClass: ['select-dropdown', 'select-dropdown-multi'],
      "language": {
        "noResults": function noResults() {
          return 'Ничего не найдено';
        },
        searching: function searching() {
          return "Загрузка...";
        }
      } //searchInputPlaceholder: 'My custom placeholder...'

    });
    $('.js-select-multi').on('select2:open', function () {
      $('.select2-search input').off('input', checkInput);
      $('.select2-search input').on('input', checkInput);
    });
    $('.js-select-multi').on('select2:closing', function () {
      $('.select2-search input').removeClass('inputed');
    });
    $('.js-select-multi-open').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Выберите варианты",
      maximumSelectionLength: 3,
      dropdownCssClass: ['select-dropdown', 'select-dropdown--opened', 'select-dropdown-multi'],
      "language": {
        "noResults": function noResults() {
          return 'Ничего не найдено';
        },
        searching: function searching() {
          return "Загрузка...";
        },
        maximumSelected: function maximumSelected(e) {
          return "Макс. количество вариантов - " + e.maximum;
        }
      } //searchInputPlaceholder: 'My custom placeholder...'

    }).on("select2:closing", function (e) {
      e.preventDefault();
    }).on("select2:closed", function (e) {
      list.select2("open");
    });
    $('.js-select-multi-open').select2('open');
    $('.js-select-multi-searching').select2({
      //minimumResultsForSearch: Infinity
      placeholder: "Выберите варианты",
      dropdownCssClass: ['select-dropdown', 'select-dropdown--opened', 'select-dropdown--searching-multi'],
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
    $('.js-select-multi-searching').select2('open');
    setTimeout(function () {
      if ($('.select-dropdown--searching-multi  input')[0]) {
        $('.select-dropdown--searching-multi  input')[0].dispatchEvent(event);
      }
    }, 500);
    $('.js-select-multi-not-found').select2({
      //minimumResultsForSearch: Infinity
      dropdownCssClass: ['select-dropdown', 'select-dropdown--opened', 'select-dropdown--not-found-multi'],
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
    $('.js-select-multi-not-found').select2('open');
    $('.select-dropdown--not-found-multi input').val('фывапа');
    $('.select-dropdown--not-found-multi input')[0] && $('.select-dropdown--not-found-multi input')[0].dispatchEvent(event);
  });
  setTimeout(function () {
    window.scrollTo(0, 0);
    $('.preloader').hide();
  }, 500); // $('#your-select-id').one('select2:open', function(e) {
  //   $('input.select2-search__field').prop('placeholder', 'enter username or city');
  // });
})();