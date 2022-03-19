import $ from 'jquery';

// BBQ Chicken Function
var chickenModal = document.getElementById('chickenModal');
var chickenOrder = document.getElementById('chickenOrder');
var chickenOption = document.getElementById('chickenOption');
var chickenCrust = document.getElementById('chickenCrust');
var chickenTopping = document.querySelector('.chicken:checked');
var cornTopping = document.querySelector('.corn:checked');
var onionTopping = document.querySelector('.onions:checked');

export function chicken() {
  chickenOrder.addEventListener('click', function (e) {
    e.preventDefault();
    chickenModal.style.display = 'none';
  });
}

//BBQ Chicken JQuery

$(function () {});
