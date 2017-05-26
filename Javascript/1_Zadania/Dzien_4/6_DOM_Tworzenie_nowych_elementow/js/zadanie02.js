/**
 * Created by Jacek on 2016-01-12.
 */
//warto sklonować tr

var button = document.getElementById("addBtn");
var ordersTable = document.getElementById("orders");
var rowToClone = ordersTable.children[0].lastElementChild;
console.log(rowToClone);

button.addEventListener("click",function(){
  // get values of input fields
  var orderId = document.getElementById("orderId");
  var item = document.getElementById("item");
  var quantity = document.getElementById("quantity");

  // clone row from existing html table
  var newOrder = rowToClone.cloneNode(true);
  // append new element to existing table as last child
  ordersTable.lastElementChild.appendChild(newOrder);
  var orderRow = ordersTable.lastElementChild.lastElementChild.firstElementChild;

  orderRow.innerHTML = orderId.value;
  orderRow.nextElementSibling.innerHTML = item.value;
  orderRow.nextElementSibling.nextElementSibling.innerHTML = quantity.value;

});
