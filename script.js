const slideWrapper = document.getElementById('slider');
const slide = document.querySelectorAll('.slide');
console.log(slide)
slide[0].getAttribute('data-index') == 1 ? slide[0].classList.add('slide-active') : null;

