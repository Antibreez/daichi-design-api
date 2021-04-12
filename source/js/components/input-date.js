(function() {
  $('.input-date').datepicker({
    dateFormat: 'dd.mm.yy',
    onClose: function() {}
  });

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
  })
})();
