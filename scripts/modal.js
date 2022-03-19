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

  // Hawaiian Modal

  var hawaiianModal = document.getElementById('hawaiianModal');
  var hawaiianClose = document.getElementById('hawaiianClose');
  var hawaiianBtn = document.getElementById('hawaiianBtn');

  hawaiianBtn.onclick = function () {
    hawaiianModal.style.display = 'block';
  };

  hawaiianClose.onclick = function () {
    hawaiianModal.style.display = 'none';
  };

  window.onclick = function (e) {
    if (e.target == hawaiianModal) {
      hawaiianModal.style.display = 'none';
    }
  };

  // Chicken Modal

  var chickenModal = document.getElementById('chickenModal');
  var chickenClose = document.getElementById('chickenClose');
  var chickenBtn = document.getElementById('chickenBtn');

  chickenBtn.onclick = function () {
    chickenModal.style.display = 'block';
  };

  chickenClose.onclick = function () {
    chickenModal.style.display = 'none';
  };

  window.onclick = function (e) {
    if (e.target == chickenModal) {
      chickenModal.style.display = 'none';
    }
  };

  // Veggie Modal

  var veggieModal = document.getElementById('veggieModal');
  var veggieClose = document.getElementById('veggieClose');
  var veggieBtn = document.getElementById('veggieBtn');

  veggieBtn.onclick = function () {
    veggieModal.style.display = 'block';
  };

  veggieClose.onclick = function () {
    veggieModal.style.display = 'none';
  };

  window.onclick = function (e) {
    if (e.target == veggieModal) {
      veggieModal.style.display = 'none';
    }
  };
}
