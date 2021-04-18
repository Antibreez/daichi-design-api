(function() {
  $('.input-date').datepicker({
    dateFormat: 'dd.mm.yy',
    regional: 'ru',
    monthNamesShort: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:+10',
    beforeShow: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2();
        $('.ui-datepicker-year').select2();
      }, 0);
    },

    onChangeMonthYear: function() {
      setTimeout(function() {
        $('.ui-datepicker-month').select2();
        $('.ui-datepicker-year').select2();
      }, 0);
    },


    // onSelect: function(dateText, inst, extensionRange) {
    //   console.log(extensionRange.startDateText);
    //   inst.input.val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
    // },
  });

  $('.input-date').datepicker('refresh');

  $('.input-date').inputmask("99.99.9999", {
    //mask: 'mm/dd/yyyy',
    placeholder: '',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true
  });

  var date = moment('06.18.1985', 'DD.MM.YYYY', true).isValid();

  // console.log(date);

  $('.input-date').on('focus', function(e) {
    const target = $(e.target);
    const val = target.val();

    if (val.length === 0) {
      target.parent().addClass('date-placeholder');
    }
  })

  $('.input-date').on('blur', function(e) {
    const target = $(e.target);
    const val = target.val();

    target.parent().removeClass('date-placeholder');
  })

  $('.input-date').on('input', function(e) {
    const target = $(e.target);
    const val = target.val();

    if (val.length > 0) {
      target.parent().removeClass('date-placeholder');
    } else {
      target.parent().addClass('date-placeholder');
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
})();
