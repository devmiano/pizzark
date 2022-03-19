import $ from 'jquery';

// Hawaiian Function
var hawaiianOrder = document.getElementById('hawaiianOrder');
var hawaiianOption = document.getElementById('hawaiianOption');
var hawaiianCrust = document.getElementById('hawaiianCrust');
var ham = document.querySelector('.ham:checked');
var pineapples = document.querySelector('.pineapples:checked');

export function hawaiian() {
  hawaiianOrder.addEventListener('click', function (e) {
    e.preventDefault();
    hawaiianModal.style.display = 'none';
  });
}

// Hawaiian JQuery

$(function () {});
