import $ from 'jquery';

// Veggie Function

var veggieModal = document.getElementById('veggieModal');
var veggieOrder = document.getElementById('veggieOrder');
var veggieOption = document.getElementById('veggieOption');
var veggieCrust = document.getElementById('veggieCrust');
var pepperTopping = document.querySelector('.peppers:checked');
var mushroomTopping = document.querySelector('.mushrooms:checked');
var tomatoeTopping = document.querySelector('.tomatoes:checked');

export function veggie() {
  veggieOrder.addEventListener('click', function (e) {
    e.preventDefault();
    veggieModal.style.display = 'none';
  });
}

//Veggie JQuery

$(function () {});
