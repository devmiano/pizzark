import $ from 'jquery';

// Veggie Function

var veggieModal = document.getElementById('veggieModal');
var veggieOrder = document.getElementById('veggieOrder');
var veggieOption = document.getElementById('veggieOption');
var veggieCrust = document.getElementById('veggieCrust');
var peppers = document.querySelector('.peppers:checked');
var mushrooms = document.querySelector('.mushrooms:checked');
var tomatoes = document.querySelector('.tomatoes:checked');

export function veggie() {
  veggieOrder.addEventListener('click', function (e) {
    e.preventDefault();
    veggieModal.style.display = 'none';
  });
}

//Veggie JQuery

$(function () {});
