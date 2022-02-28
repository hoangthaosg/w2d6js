'use strict'

const timer = document.getElementById("timer");

setInterval(function () {
    const date = new Date();

    timer.innerHTML = date.toISOString().substring(0, 19).replace('T', ' ');
}, 1000);