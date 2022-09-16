var first = document.getElementById('first');
var second = document.getElementById('second');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        first.style.display = 'none';
        second.style.display = 'flex';
    } else {
        first.style.display = 'flex';
        second.style.display = 'none';
    }
})





//nav
var open = document.getElementById('menu');
var close = document.getElementById('close');
var nav1 = document.getElementById('nav');


close.addEventListener('click', function() {
    nav1.classList.remove('move');
})
open.addEventListener('click', function() {
        nav1.classList.add('move');
    })
    //
window.addEventListener('scroll', function() {
    if (window.scrollY > 600) {
        open.style.background = 'rgba(255, 255, 255, .8)';
    } else {
        open.style.background = '#fff';
    }
})

//clock
let clock = document.getElementById('clock');

setInterval(() => {
    let d = new Date();
    clock.innerHTML = d.toLocaleTimeString();
}, 1000);


//blog card
var card = document.getElementById('card');
var card_open = document.getElementById('more');
var card_open0 = document.getElementById('more0');
var card_open1 = document.getElementById('more1');
var card_open2 = document.getElementById('more2');
var card_open3 = document.getElementById('more3');
var card_open4 = document.getElementById('more4');
var card_open5 = document.getElementById('more5');

card_open.addEventListener('click',
    function() {
        card.style.left = '50%';
        card.style.transition = '.6s';
    });

card_open0.addEventListener('click',
    function() {
        card.style.left = '50%';
        card.style.transition = '.6s';
    });
card_open1.addEventListener('click',
    function() {
        card.style.left = '50%';
        card.style.transition = '.6s';
    });
card_open2.addEventListener('click',
    function() {
        card.style.left = '50%';
        card.style.transition = '.6s';
    });
card_open3.addEventListener('click',
    function() {
        card.style.left = '50%';
        card.style.transition = '.6s';
    });
card_open4.addEventListener('click',
    function() {
        card.style.left = '50%';
        card.style.transition = '.6s';
    });
card_open5.addEventListener('click',
    function() {
        card.style.left = '50%';
        card.style.transition = '.6s';
    });

var card_close = document.getElementById('pst_close');
card_close.addEventListener('click',
    function() {
        card.style.left = '-100%';
        card.style.transition = '.6s';
    });




//Scroll Revel