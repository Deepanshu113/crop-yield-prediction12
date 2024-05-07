const slides = document.querySelectorAll('.slide');
let counter = 1;

setInterval(() => {
    counter++;
    if (counter === slides.length) {
        counter = 0;
    }
    document.querySelector('.slides').style.transform = `translateX(${-counter * 100}%)`;
}, 6000); // Change slide every 5 seconds