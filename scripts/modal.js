export function modal() {
  // Pepperoni Modal

  var pepperoniModal = document.getElementById('pepperoniModal');
  var pepperoniClose = document.getElementById('pepperoniClose');
  var pepperoniBtn = document.getElementById('pepperoniBtn');

  pepperoniBtn.onclick = function () {
    pepperoniModal.style.display = 'block';
  };

  pepperoniClose.onclick = function () {
    pepperoniModal.style.display = 'none';
  };

  window.onclick = function (e) {
    if (e.target == pepperoniModal) {
      pepperoniModal.style.display = 'none';
    }
  };
  // Checkout Modal

  var locationModal = document.getElementById('locationModal');
  var locationClose = document.getElementById('locationClose');
  var locationBtn = document.getElementById('locationBtn');

  locationBtn.onclick = function () {
    locationModal.style.display = 'block';
  };

  locationClose.onclick = function () {
    locationModal.style.display = 'none';
  };

  window.onclick = function (e) {
    if (e.target == locationModal) {
      locationModal.style.display = 'none';
    }
  };
}
