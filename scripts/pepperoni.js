import $ from 'jquery';

// Pepperoni Function
var pepperoniModal = document.getElementById('pepperoniModal');
var pepperoniOrder = document.getElementById('pepperoniOrder');
var pepperoniOption = document.getElementById('pepperoniOption');
var pepperoniCrust = document.getElementById('pepperoniCrust');
var beef = document.querySelector('.beef:checked');
var cheese = document.querySelector('.cheese:checked');

export function pepperoni() {
  pepperoniOrder.addEventListener('click', function (e) {
    e.preventDefault();
    pepperoniModal.style.display = 'none';
  });
}

// Pepperoni JQuery

$(function () {});
