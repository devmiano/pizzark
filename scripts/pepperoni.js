import $ from 'jquery';

// Variables
var pepperoniModal = document.getElementById('pepperoniModal');
var pepperoniOrder = document.getElementById('pepperoniOrder');
var pOption = document.getElementById('pepperoniOption');
var pCrust = document.getElementById('pepperoniCrust');
var beef = document.getElementById('beef');
var cheese = document.getElementById('cheese');
var pepperoniToppings = 0;
var pepperoniOption, pepperoniCrust, pepperoniTotal;

// Pepperoni Function
export function pepperoni() {
  pepperoniOrder.addEventListener('click', function (e) {
    e.preventDefault();
    pepperoniModal.style.display = 'none';

    pepperoniOption = parseInt(pOption.value);
    pepperoniCrust = parseInt(pCrust.value);

    if (beef.checked == true && cheese.checked == true) {
      var beef1 = document.getElementById('beef').value;
      var cheese1 = document.getElementById('cheese').value;
      pepperoniToppings = parseInt(beef1) + parseInt(cheese1);
    } else if (cheese.checked == true) {
      var cheese2 = document.getElementById('cheese').value;
      pepperoniToppings = parseInt(cheese2);
    } else if (beef.checked == true) {
      var beef2 = document.getElementById('beef').value;
      pepperoniToppings = parseInt(beef2);
    } else {
      return alert('please,select atleast one');
    }
    pepperoniTotal = pepperoniOption + pepperoniCrust + pepperoniToppings;
    alert(pepperoniTotal);

    // Pepperoni JQuery

    $(function () {});
  });
}
