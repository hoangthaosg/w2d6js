'use strict'

const form = document.getElementById('mainForm');
form.onsubmit = e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const url = document.getElementById('url').value;
    const checkout = document.getElementById('checkout').checked;
    console.log({email, password: pass, url, checkout});
}