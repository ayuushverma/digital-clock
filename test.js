let clock = document.querySelector('.clock');

setInterval(function() {
    let date = new Date(); // Create a new Date object every second
    clock.innerHTML = date.toLocaleTimeString();
    console.log(date.toLocaleTimeString());
}, 1000);
