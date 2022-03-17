var modal = document.getElementById('myModal');
var close = document.getElementsByClassName('close')[0];

var pepperoni = document.getElementById('pepperoniBtn');
var hawaiian = document.getElementById('hawaiianBtn');
var chicken = document.getElementById('chickenBtn');
var veggie = document.getElementById('veggieBtn');

pepperoni.onclick = function () {
  modal.style.display = 'block';
};
hawaiian.onclick = function () {
  modal.style.display = 'block';
};
chicken.onclick = function () {
  modal.style.display = 'block';
};
veggie.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};
