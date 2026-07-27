document.addEventListener('DOMContentLoaded', function () {

  var continueButton = document.getElementById('protest-type-continue');

  if (!continueButton) {
    return;
  }

  var group = document.getElementById('protest-type-group');
  var errorMessage = document.getElementById('protest-type-error');

  var destinations = {
    'ref-decision': 'uc-4-2.html',
    'directors-ruling': 'uc-4-2a.html',
    'committee-ruling': 'uc-4-2a.html'
  };

  continueButton.addEventListener('click', function () {
    var selected = document.querySelector('input[name="protest-type"]:checked');

    if (!selected) {
      if (group) {
        group.classList.add('form-group-error');
      }
      if (errorMessage) {
        errorMessage.hidden = false;
      }
      return;
    }

    if (group) {
      group.classList.remove('form-group-error');
    }
    if (errorMessage) {
      errorMessage.hidden = true;
    }

    window.location.href = destinations[selected.value];
  });

});
