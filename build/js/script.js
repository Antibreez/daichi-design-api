"use strict";

(function () {
  $('.input-date').datepicker({
    dateFormat: 'dd.mm.yy',
    onClose: function onClose() {}
  });
  $('.input-date').inputmask("99.99.9999", {
    //mask: 'mm/dd/yyyy',
    placeholder: '',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true
  });
  var date = moment('06.18.1985', 'DD.MM.YYYY', true).isValid(); // console.log(date);

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
  });
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
      dropdownCssClass: 'select-dropdown' //searchInputPlaceholder: 'My custom placeholder...'

    });
    $('.js-select-combo').on('select2:open', function () {
      $('.select2-search input').off('input', checkInput);
      $('.select2-search input').on('input', checkInput);
      console.log(document.querySelector('.select2-results  .select2-results__options').innerHTML); // setTimeout(function() {
      //   Scrollbar.init(document.querySelector('.select2-results  .select2-results__options'));
      // }, 300)
      // Scrollbar.init(results, {
      //   alwaysShowTracks: true,
      // });
      //$('.select-dropdown .select2-results__options').mCustomScrollbar();
    });
    $('.js-select-combo').on('select2:closing', function () {
      $('.select2-search input').removeClass('inputed');
    });
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