(function() {
  const $checkbox = $('.table--payment .checkbox__input');

  $checkbox.change(function() {
    const $row = $(this).parents('tr');
    $row.toggleClass('checked');
  });
})();
