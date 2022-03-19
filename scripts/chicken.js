import $ from 'jquery';

// BBQ Chicken Function
var chickenModal = document.getElementById('chickenModal');
var chickenOrder = document.getElementById('chickenOrder');
var chickenOption = document.getElementById('chickenOption');
var chickenCrust = document.getElementById('chickenCrust');
var chicken = document.querySelector('.chicken:checked');
var corn = document.querySelector('.corn:checked');
var onions = document.querySelector('.onions:checked');

export function chickenBbq() {
  chickenOrder.addEventListener('click', function (e) {
    e.preventDefault();
    chickenModal.style.display = 'none';
  });
}

//BBQ Chicken JQuery

$(function () {});
