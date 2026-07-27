document.addEventListener('DOMContentLoaded', function () {

  var radios = document.querySelectorAll('input[name="start-date"]');
  var otherField = document.getElementById('start-date-other-field');

  if (!radios.length || !otherField) {
    return;
  }

  function updateVisibility() {
    var selected = document.querySelector('input[name="start-date"]:checked');
    otherField.hidden = !selected || selected.value !== 'other';
  }

  radios.forEach(function (radio) {
    radio.addEventListener('change', updateVisibility);
  });

  updateVisibility();

});
