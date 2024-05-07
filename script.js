let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.removes('active');
}


document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal ({
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
    });

    sr.reveal('.text',{delay: 200, origin: 'top'});
    sr.reveal('.form-container form',{delay: 600, origin: 'left'});
    sr.reveal('.heading',{delay: 400, origin: 'top'});
    sr.reveal('.ride-container .box',{delay: 600, origin: 'top'});
    sr.reveal('.services_container .box',{delay: 800, origin: 'top'});
    sr.reveal('.about-container img',{delay: 800, origin: 'top'});
    sr.reveal('.about-text',{delay: 800, origin: 'right'});
    sr.reveal('.reviews-container .box',{delay: 800, origin: 'top'});
});


reviews-container