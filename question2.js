'use strict'

const form = document.getElementById('mainForm');
form.onsubmit = e => {
    e.preventDefault();
    const productNumber = document.getElementById('productNumber').value;
    const quantity = document.getElementById('quantity').value;
    const productName = document.getElementById('productName').value;
    const supplier = document.getElementById('supplier').value;
    const price = document.getElementById('price').value;
    const dateSupplied = document.getElementById('dateSupplied').value;
    const input = {productNumber, quantity, productName, supplier, price, dateSupplied};
    console.log(input)
    var myWindow = window.open("", "myWindow", "width=600,height=400");   
    myWindow.document.write(JSON.stringify(input, null, 2)); 
}