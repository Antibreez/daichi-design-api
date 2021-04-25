(function() {
  const selectOpt = {
    minimumResultsForSearch: Infinity,
    dropdownCssClass: 'calendar-dropdown'
  };

  $('.input-date').datepicker({
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    regional: 'ru',
    monthNamesShort: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',
    beforeShow: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },

    onChangeMonthYear: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },
  });

  $('.input-date-trigger').datepicker({
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    regional: 'ru',
    monthNamesShort: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',

    onChangeMonthYear: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },

    onSelect: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },
  });

  $('.input-date-trigger-single').datepicker({
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    regional: 'ru',
    monthNamesShort: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',

    onChangeMonthYear: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },

    onSelect: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },
  });

  $('.input-date-trigger-range').datepicker({
    range: 'period',
    dateFormat: 'dd.mm.yy',
    showOtherMonths: true,
    regional: 'ru',
    monthNamesShort: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',

    onChangeMonthYear: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2(selectOpt);
        $('.ui-datepicker-year').select2(selectOpt);
      }, 0);
    },

    onSelect: function(input, inst) {
      console.log(inst);
      setTimeout(function() {

        $('.input-date-trigger-range').find('.ui-datepicker-month').select2(selectOpt);
        $('.input-date-trigger-range').find('.ui-datepicker-year').select2(selectOpt);
      }, 100);
    },

    beforeShow: function(input, inst) {
      console.log(inst);
    }
  });

  const current = moment();
  const day = current.format('DD');
  const month = current.format('MM');
  const year = current.format('YYYY');
  let pickedDate = '';
  let pickedPeriod = [];
  let hoverDate = '';

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

  day > 15
    ? pickedPeriod = ['02.' + month + '.' + year, '11.' + month + '.' + year]
    : pickedPeriod = ['17.' + month + '.' + year, '26.' + month + '.' + year]

  $('.input-date-trigger').datepicker('setDate', pickedDate);
  $('.input-date-trigger-single').datepicker('setDate', pickedDate);
  $('.input-date-trigger-range').datepicker('setDate', pickedPeriod);



  $('.input-date-trigger-single .ui-datepicker-calendar td a').each(function() {
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


  $('.input-date').on('focus', function(e) {
    const target = $(e.target);
    const val = target.val();

    if (val.length === 0) {
      target.parent().addClass('date-placeholder');
    }
  });

  $('.input-date').on('blur', function(e) {
    const target = $(e.target);
    const val = target.val();

    target.parent().removeClass('date-placeholder');
  });

  $('.input-date').on('input', function(e) {
    const target = $(e.target);
    const val = target.val();

    if (val.length > 0) {
      target.parent().removeClass('date-placeholder');
    } else {
      target.parent().addClass('date-placeholder');
    }

    const isValid = moment($(this).val(), 'DD.MM.YYYY', true).isValid();
    if (isValid) {
      $(this).datepicker('hide');
      $(this).datepicker('show');
    }
  });

  // $(document).ready(function() {
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
  }).on("select2:closing", function(e) {
    e.preventDefault();
  }).on("select2:closed", function(e) {
    list.select2("open");
  });

  $('#calendar-dropdown-month').select2('open');

  $('#calendar-dropdown-year').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: ['calendar-dropdown', 'calendar-dropdown-permanent'],
    closeOnSelect: false
  }).on("select2:closing", function(e) {
    e.preventDefault();
  }).on("select2:closed", function(e) {
    list.select2("open");
  });

  $('#calendar-dropdown-year').select2('open');
})();
