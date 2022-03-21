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
var pepperoniToppings = 0;
var subtotal = 0;
var grandTotal = 0;
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

    const newOrder = `<div class="card-one"><div><p class="title-one">Pepperoni</p><p class="price-one">KES ${orderName}</p></div><div><p class="title-one">Crust</p><p class="price-one">KES ${orderCrust}</p></div><div><p class="title-one">Toppings</p><p class="price-one">KES ${orderToppings}</p></div><div><p class="title-one">Total</p><p class="price-one">KES ${orderTotal}</p></div></div>`;

    const list = document.querySelector('#orderCard');
    list.insertAdjacentHTML('afterbegin', newOrder);

    subtotal = subtotal + orderTotal;
    grandTotal = subtotal + 250;

    const orderCheckout = document.querySelector('#orderCheckoutGrandTotal');
    const newGrandTotal = `<span class="t_price">${grandTotal}</span>`;
    orderCheckout.insertAdjacentHTML('afterbegin', newGrandTotal);

    var subtotalText = `<p class="name">Subtotal</p><p class="total-price">KES <span class="st_price">${subtotal}</span></p>`;

    var subtotalTrue = document.querySelector('#subtotalTrue');

    subtotalTrue.insertAdjacentHTML('afterbegin', subtotalText);

    locationOrder.addEventListener('click', function (e) {
      e.preventDefault();
      locationModal.style.display = 'none';

      var locationText = `<p class="name">${location.value}</p><p class="total-price">KES <span class="st_price">250</span></p>`;
      var locationEmpty = `<p>Please add a location</p>`;
      var locationVal = document.querySelector('#locationVal');
      var locationTrue = document.querySelector('#locationTrue');

      if (location.value == '') {
        locationVal.insertAdjacentHTML('afterbegin', locationEmpty);
      } else {
        locationTrue.insertAdjacentHTML('afterbegin', locationText);
      }
    });

    checkout.addEventListener('click', function (e) {
      e.preventDefault();

      var checkoutVal = document.querySelector('#checkoutVal');

      checkoutVal.innerHTML = '<p>Thanks for choosing Pizzark</p>';
    });
  });
}
