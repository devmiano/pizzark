import $ from 'jquery';

// BBQ Chicken Function
var chickenModal = document.getElementById('chickenModal');
var chickenOrder = document.getElementById('chickenOrder');
var cOption = document.getElementById('chickenOption');
var cCrust = document.getElementById('chickenCrust');
var chickens = document.querySelector('.chicken:checked');
var corn = document.querySelector('.corn:checked');
var onion = document.querySelector('.onions:checked');
var chickenToppings = 0;
var chickenOption, chickenCrust, chickenTotal;

export function chicken() {
  chickenOrder.addEventListener('click', function (e) {
    e.preventDefault();
    chickenModal.style.display = 'none';
  });
}

//BBQ Chicken JQuery

$(function () {});
