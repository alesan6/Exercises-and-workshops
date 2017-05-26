/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function () {

var invoice = document.querySelector("#invoiceData");
 console.log(invoice);

 var input = document.getElementById("invoice");
 input.addEventListener("select", function () {
    invoice.style.display = "hidden";

});
})

////NIE DZIAŁA
