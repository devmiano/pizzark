// General Functions

var output = document.getElementById('output');

// Pepperoni Functions

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

// Pepperoni Orders
var pepperoniOrder = document
  .getElementById('pepperoniOrder')
  .addEventListener('click', function () {
    var pepperoniOptions = document.getElementById('pepperoniOptions').value;
    var pepperoniCrust = document.getElementById('pepperoniCrust').value;
    var beef = document.querySelector('.beef:checked').value;
    var cheese = document.querySelector('.cheese:checked').value;

    output.innerHTML =
      pepperoniOptions + ' ' + pepperoniCrust + ' ' + beef + ' ' + cheese;
  });

// Hawaiian Functions

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

var hawaiianOrder = document
  .getElementById('hawaiianOrder')
  .addEventListener('click', function () {
    var hawaiianOptions = document.getElementById('hawaiianOptions').value;
    var hawaiianCrust = document.getElementById('hawaiianCrust').value;
    var ham = document.querySelector('.ham:checked').value;
    var pineapples = document.querySelector('.pineapples:checked').value;

    output.innerHTML =
      hawaiianOptions + ' ' + hawaiianCrust + ' ' + ham + ' ' + pineapples;
  });

// Chicken Functions

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

var chickenOrder = document
  .getElementById('chickenOrder')
  .addEventListener('click', function () {
    var chickenOptions = document.getElementById('chickenOptions').value;
    var chickenCrust = document.getElementById('chickenCrust').value;
    var chicken = document.querySelector('.chicken:checked').value;
    var corn = document.querySelector('.corn:checked').value;
    var onions = document.querySelector('.onions:checked').value;

    output.innerHTML =
      chickenOptions +
      ' ' +
      chickenCrust +
      ' ' +
      chicken +
      ' ' +
      corn +
      ' ' +
      onions;
  });

// Veggie Functions

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

var veggieOrder = document
  .getElementById('veggieOrder')
  .addEventListener('click', function () {
    var veggieOptions = document.getElementById('veggieOptions').value;
    var veggieCrust = document.getElementById('veggieCrust').value;
    var peppers = document.querySelector('.peppers:checked').value;
    var mushrooms = document.querySelector('.mushrooms:checked').value;
    var tomatoes = document.querySelector('.tomatoes:checked').value;

    output.innerHTML =
      veggieOptions +
      ' ' +
      veggieCrust +
      ' ' +
      peppers +
      ' ' +
      mushrooms +
      ' ' +
      tomatoes;
  });
