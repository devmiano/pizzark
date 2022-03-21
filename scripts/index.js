// // Variables
// var pepperoniModal = document.getElementById('pepperoniModal');
// var pepperoniOrder = document.getElementById('pepperoniOrder');
// var pOption = document.getElementById('pepperoniOption');
// var pCrust = document.getElementById('pepperoniCrust');
// var beef = document.getElementById('beef');
// var cheese = document.getElementById('cheese');
// var pepperoniToppings = 0;
// var pepperoniOption, pepperoniCrust, pepperoniTotal;

// // Variables
// var hawaiianModal = document.getElementById('hawaiianModal');
// var hawaiianOrder = document.getElementById('hawaiianOrder');
// var hOption = document.getElementById('hawaiianOption');
// var hCrust = document.getElementById('hawaiianCrust');
// var beef = document.getElementById('beef');
// var cheese = document.getElementById('cheese');
// var hawaiianToppings = 0;
// var hawaiianOption, hawaiianCrust, hawaiianTotal;

// // Variables
// var chickenModal = document.getElementById('chickenModal');
// var chickenOrder = document.getElementById('chickenOrder');
// var cOption = document.getElementById('chickenOption');
// var cCrust = document.getElementById('chickenCrust');
// var chickens = document.querySelector('.chicken:checked');
// var corn = document.querySelector('.corn:checked');
// var onion = document.querySelector('.onions:checked');
// var chickenToppings = 0;
// var chickenOption, chickenCrust, chickenTotal;
// var chickenToppings = 0;
// var chickenOption, chickenCrust, chickenTotal;

// // Variables
// var veggieModal = document.getElementById('veggieModal');
// var veggieOrder = document.getElementById('veggieOrder');
// var vOption = document.getElementById('veggieOption');
// var vCrust = document.getElementById('veggieCrust');
// var beef = document.getElementById('beef');
// var cheese = document.getElementById('cheese');
// var veggieToppings = 0;
// var veggieOption, veggieCrust, veggieTotal;

// export function invoice() {
//   pepperoniOrder.addEventListener('click', function (e) {
//     e.preventDefault();
//     pepperoniModal.style.display = 'none';
//     pepperoniOption = parseInt(pOption.value);
//     pepperoniCrust = parseInt(pCrust.value);
//     if (beef.checked == true && cheese.checked == true) {
//       var beef1 = document.getElementById('beef').value;
//       var cheese1 = document.getElementById('cheese').value;
//       pepperoniToppings = parseInt(beef1) + parseInt(cheese1);
//     } else if (cheese.checked == true) {
//       var cheese2 = document.getElementById('cheese').value;
//       pepperoniToppings = parseInt(cheese2);
//     } else if (beef.checked == true) {
//       var beef2 = document.getElementById('beef').value;
//       pepperoniToppings = parseInt(beef2);
//     } else {
//       return alert('please select atleast one topping');
//     }
//     pepperoniTotal = pepperoniOption + pepperoniCrust + pepperoniToppings;

//     function addPepperoniOrder(
//       pepperoniOption,
//       pepperoniCrust,
//       pepperoniToppings,
//       pepperoniTotal
//     ) {
//       this.pepperoniOption = pepperoniOption;
//       this.pepperoniCrust = pepperoniCrust;
//       this.pepperoniToppings = pepperoniToppings;
//       this.pepperoniTotal = pepperoniTotal;
//     }

//     var addToPepperoniOrder = new addPepperoniOrder(
//       pepperoniOption,
//       pepperoniCrust,
//       pepperoniToppings,
//       pepperoniTotal
//     );

//     var orderName = addToPepperoniOrder.pepperoniOption;
//     var orderCrust = addToPepperoniOrder.pepperoniCrust;
//     var orderToppings = addToPepperoniOrder.pepperoniToppings;
//     var orderTotal = addToPepperoniOrder.pepperoniTotal;

//     const newOrder = `<div class="card-one"><div><p class="title-one">Pizza</p><p class="price-one">KES ${orderName}</p></div><div><p class="title-one">Crust</p><p class="price-one">KES ${orderCrust}</p></div><div><p class="title-one">Toppings</p><p class="price-one">KES ${orderToppings}</p></div><div><p class="title-one">Total</p><p class="price-one">KES ${orderTotal}</p></div></div>`;

//     const list = document.querySelector('#orderCard');
//     list.insertAdjacentHTML('afterbegin', newOrder);
//   });
//   chickenOrder.addEventListener('click', function (e) {
//     e.preventDefault();
//     chickenModal.style.display = 'none';
//     chickenOption = parseInt(cOption.value);
//     chickenCrust = parseInt(cCrust.value);
//     if (beef.checked == true && cheese.checked == true) {
//       var chickens1 = document.getElementById('chickens').value;
//       var corn1 = document.getElementById('corn').value;
//       var onion1 = document.getElementById('onion').value;
//       chickenToppings =
//         parseInt(chickens1) + parseInt(corn1) + parseInt(onion1);
//     } else if (cheese.checked == true) {
//       var cheese2 = document.getElementById('cheese').value;
//       chickenToppings = parseInt(cheese2);
//     } else if (beef.checked == true) {
//       var beef2 = document.getElementById('beef').value;
//       chickenToppings = parseInt(beef2);
//     } else {
//       return alert('please select atleast one topping');
//     }
//     chickenTotal = chickenOption + chickenCrust + chickenToppings;

//     function addChickenOrder(
//       pepperoniOption,
//       pepperoniCrust,
//       pepperoniToppings,
//       pepperoniTotal
//     ) {
//       this.chickenOption = chickenOption;
//       this.chickenCrust = chickenCrust;
//       this.chickenToppings = chickenToppings;
//       this.chickenTotal = chickenTotal;
//     }

//     var addToChickenOrder = new addChickenOrder(
//       chickenOption,
//       chickenCrust,
//       chickenToppings,
//       chickenTotal
//     );

//     var orderName = addToChickenOrder.chickenOption;
//     var orderCrust = addToChickenOrder.chickenCrust;
//     var orderToppings = addToChickenOrder.chickenToppings;
//     var orderTotal = addToChickenOrder.chickenTotal;

//     const newOrder = `<div class="card-one"><div><p class="title-one">Pizza</p><p class="price-one">KES ${orderName}</p></div><div><p class="title-one">Crust</p><p class="price-one">KES ${orderCrust}</p></div><div><p class="title-one">Toppings</p><p class="price-one">KES ${orderToppings}</p></div><div><p class="title-one">Total</p><p class="price-one">KES ${orderTotal}</p></div></div>`;

//     const list = document.querySelector('#orderCard');
//     list.insertAdjacentHTML('afterbegin', newOrder);
//   });
//   hawaiianOrder.addEventListener('click', function (e) {
//     e.preventDefault();
//     hawaiianModal.style.display = 'none';
//     hawaiianOption = parseInt(hOption.value);
//     hawaiianCrust = parseInt(hCrust.value);
//     if (beef.checked == true && cheese.checked == true) {
//       var beef1 = document.getElementById('beef').value;
//       var cheese1 = document.getElementById('cheese').value;
//       hawaiianToppings = parseInt(beef1) + parseInt(cheese1);
//     } else if (cheese.checked == true) {
//       var cheese2 = document.getElementById('cheese').value;
//       hawaiianToppings = parseInt(cheese2);
//     } else if (beef.checked == true) {
//       var beef2 = document.getElementById('beef').value;
//       hawaiianToppings = parseInt(beef2);
//     } else {
//       return alert('please select atleast one topping');
//     }
//     hawaiianTotal = hawaiianOption + hawaiianCrust + hawaiianToppings;

//     function addHawaiianOrder(
//       hawaiianOption,
//       hawaiianCrust,
//       hawaiianToppings,
//       hawaiianTotal
//     ) {
//       this.hawaiianOption = hawaiianOption;
//       this.hawaiianCrust = hawaiianCrust;
//       this.hawaiianToppings = hawaiianToppings;
//       this.hawaiianTotal = hawaiianTotal;
//     }

//     var addToHawaiianOrder = new addHawaiianOrder(
//       hawaiianOption,
//       hawaiianCrust,
//       hawaiianToppings,
//       hawaiianTotal
//     );

//     var orderName = addToHawaiianOrder.hawaiianOption;
//     var orderCrust = addToHawaiianOrder.hawaiianCrust;
//     var orderToppings = addToHawaiianOrder.hawaiianToppings;
//     var orderTotal = addToHawaiianOrder.hawaiianTotal;

//     const newOrder = `<div class="card-one"><div><p class="title-one">Pizza</p><p class="price-one">KES ${orderName}</p></div><div><p class="title-one">Crust</p><p class="price-one">KES ${orderCrust}</p></div><div><p class="title-one">Toppings</p><p class="price-one">KES ${orderToppings}</p></div><div><p class="title-one">Total</p><p class="price-one">KES ${orderTotal}</p></div></div>`;

//     const list = document.querySelector('#orderCard');
//     list.insertAdjacentHTML('afterbegin', newOrder);
//   });
//   veggieOrder.addEventListener('click', function (e) {
//     e.preventDefault();
//     veggieModal.style.display = 'none';
//     veggieOption = parseInt(vOption.value);
//     pepperoniCrust = parseInt(vCrust.value);
//     if (beef.checked == true && cheese.checked == true) {
//       var beef1 = document.getElementById('beef').value;
//       var cheese1 = document.getElementById('cheese').value;
//       veggieToppings = parseInt(beef1) + parseInt(cheese1);
//     } else if (cheese.checked == true) {
//       var cheese2 = document.getElementById('cheese').value;
//       veggieToppings = parseInt(cheese2);
//     } else if (beef.checked == true) {
//       var beef2 = document.getElementById('beef').value;
//       veggieToppings = parseInt(beef2);
//     } else {
//       return alert('please select atleast one topping');
//     }
//     veggieTotal = veggieOption + veggieCrust + veggieToppings;

//     function addVeggieOrder(
//       pepperoniOption,
//       pepperoniCrust,
//       pepperoniToppings,
//       pepperoniTotal
//     ) {
//       this.veggieOption = veggieOption;
//       this.veggieCrust = veggieCrust;
//       this.veggieToppings = veggieToppings;
//       this.veggieTotal = veggieTotal;
//     }

//     var addToVeggieOrder = new addVeggieOrder(
//       veggieOption,
//       veggieCrust,
//       veggieToppings,
//       veggieTotal
//     );

//     var orderName = addToVeggieOrder.veggieOption;
//     var orderCrust = addToVeggieOrder.veggieCrust;
//     var orderToppings = addToVeggieOrder.veggieToppings;
//     var orderTotal = addToVeggieOrder.veggieTotal;

//     const newOrder = `<div class="card-one"><div><p class="title-one">Pizza</p><p class="price-one">KES ${orderName}</p></div><div><p class="title-one">Crust</p><p class="price-one">KES ${orderCrust}</p></div><div><p class="title-one">Toppings</p><p class="price-one">KES ${orderToppings}</p></div><div><p class="title-one">Total</p><p class="price-one">KES ${orderTotal}</p></div></div>`;

//     const list = document.querySelector('#orderCard');
//     list.insertAdjacentHTML('afterbegin', newOrder);
//   });
// }
