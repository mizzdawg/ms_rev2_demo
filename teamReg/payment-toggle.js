document.addEventListener('DOMContentLoaded', function () {

  var radios = document.querySelectorAll('input[name="payment-method"]');

  if (!radios.length) {
    return;
  }

  var fieldsByMethod = {
    paypal: document.getElementById('paypal-fields'),
    venmo: document.getElementById('venmo-fields'),
    'credit-card': document.getElementById('credit-card-fields')
  };

  function updateVisibility() {
    var selected = document.querySelector('input[name="payment-method"]:checked');
    var method = selected ? selected.value : null;

    Object.keys(fieldsByMethod).forEach(function (key) {
      var fields = fieldsByMethod[key];
      if (fields) {
        fields.hidden = key !== method;
      }
    });
  }

  radios.forEach(function (radio) {
    radio.addEventListener('change', updateVisibility);
  });

  updateVisibility();

});
