// Variables
var pepperoniModal = document.getElementById('pepperoniModal');
var pepperoniOrder = document.getElementById('pepperoniOrder');
var pOption = document.getElementById('pepperoniOption');
var pCrust = document.getElementById('pepperoniCrust');
var beef = document.getElementById('beef');
var cheese = document.getElementById('cheese');
var locationOrder = document.getElementById('locationOrder');
var locationModal = document.getElementById('locationModal');
var location = document.getElementById('location');
var checkout = document.getElementById('checkout');
var reset = document.getElementById('form_data').reset();
var pepperoniToppings = 0;
var subtotal = 0;
var grandTotal = 0;
var pepperoniOption,
  pepperoniCrust,
  pepperoniTotal,
  optionText,
  crustText,
  toppingsText;

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
      toppingsText = ' - Beef and Cheese';
    } else if (cheese.checked == true) {
      var cheese2 = document.getElementById('cheese').value;
      pepperoniToppings = parseInt(cheese2);
      toppingsText = ' - Cheese';
    } else if (beef.checked == true) {
      var beef2 = document.getElementById('beef').value;
      pepperoniToppings = parseInt(beef2);
      toppingsText = ' - Beef';
    } else {
      return alert('please select atleast one topping');
    }
    pepperoniTotal = pepperoniOption + pepperoniCrust + pepperoniToppings;

    function addPepperoniOrder(
      pepperoniOption,
      pepperoniCrust,
      pepperoniToppings,
      pepperoniTotal
    ) {
      this.pepperoniOption = pepperoniOption;
      this.pepperoniCrust = pepperoniCrust;
      this.pepperoniToppings = pepperoniToppings;
      this.pepperoniTotal = pepperoniTotal;
    }

    var addToPepperoniOrder = new addPepperoniOrder(
      pepperoniOption,
      pepperoniCrust,
      pepperoniToppings,
      pepperoniTotal
    );

    var orderName = addToPepperoniOrder.pepperoniOption;
    var orderCrust = addToPepperoniOrder.pepperoniCrust;
    var orderToppings = addToPepperoniOrder.pepperoniToppings;
    var orderTotal = addToPepperoniOrder.pepperoniTotal;

    if (orderName == '499') {
      optionText = ' - Small';
    } else if (orderName == '749') {
      optionText = ' - Medium';
    } else if (orderName == '1099') {
      optionText = ' - Large';
    } else if (orderName == '1399') {
      optionText = ' - Deluxe';
    }

    if (orderCrust == '99') {
      crustText = ' - Single';
    } else if (orderCrust == '149') {
      crustText = ' - Double';
    } else if (orderCrust == '199') {
      crustText = ' - Mega';
    }

    const newOrder = `<div class="card-one"><div><p class="title-one">Pepperoni${optionText}</p><p class="price-one">KES ${orderName}</p></div><div><p class="title-one">Crust${crustText}</p><p class="price-one">KES ${orderCrust}</p></div><div><p class="title-one">Toppings${toppingsText}</p><p class="price-one">KES ${orderToppings}</p></div><div><p class="title-one">Total</p><p class="price-one">KES ${orderTotal}</p></div></div>`;

    const list = document.querySelector('#orderCard');
    list.insertAdjacentHTML('afterbegin', newOrder);

    subtotal = subtotal + orderTotal;
    grandTotal = subtotal + 250;

    var subtotalTrue = document.getElementById('subtotalTrue');
    subtotalTrue.innerHTML = 'KES ' + subtotal;

    locationOrder.addEventListener('click', function (e) {
      e.preventDefault();
      locationModal.style.display = 'none';

      var locationText = document.getElementById('location').value;
      var locationPrice = document.getElementById('locationPrice');
      var locationEmpty = 'Please add a location';
      var locationVal = document.getElementById('locationVal');
      var locationTrue = document.getElementById('locationTrue');

      if (location.value == '') {
        locationVal.innerHTML = locationEmpty;
        const orderCheckout = document.getElementById(
          'orderCheckoutGrandTotal'
        );
        orderCheckout.innerHTML = 'KES ' + grandTotal;
      } else {
        locationTrue.innerHTML = locationText;
        locationPrice.innerHTML = 'KES 250';
        const orderCheckout = document.getElementById(
          'orderCheckoutGrandTotal'
        );
        orderCheckout.innerHTML = 'KES ' + grandTotal;
      }
    });

    checkout.addEventListener('click', function (e) {
      e.preventDefault();

      var checkoutVal = document.querySelector('#checkoutVal');
      var locationText = document.getElementById('location').value;
      var locationTrue = document.getElementById('locationTrue');
      var locationPrice = document.getElementById('locationPrice');

      if (location.value == '') {
        locationModal.style.display = 'block';
      } else {
        locationTrue.innerHTML = locationText;
        locationPrice.innerHTML = 'KES 250';
        const orderCheckout = document.getElementById(
          'orderCheckoutGrandTotal'
        );
        orderCheckout.innerHTML = 'KES ' + grandTotal;
        checkoutVal.innerHTML =
          'Thanks for choosing Pizzark We shall deliver to your location in ' +
          locationText +
          ' soon';
      }
      return reset;
    });
  });
}
