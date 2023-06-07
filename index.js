'use strict'

const slider = document.querySelector('.slider__content');
const btnNext = document.querySelector('.btn--next');
const btnPrev = document.querySelector('.btn--prev');

const widthSlide = 400;
const countSlide = 3;
let currentSlide = 0;

btnPrev.setAttribute("disabled", "true");
btnNext.addEventListener('click', () => {
    if (currentSlide < countSlide - 1) { /* будем увеличивать до момента последнего слайда*/
        currentSlide++;
        btnPrev.removeAttribute("disabled");

    }
    else {
        btnNext.setAttribute("disabled", "true"); // достигли последнего слайда - кнопка стала недоступна 
    }
    let shift = currentSlide * widthSlide;
    slider.style.transform = `translateX(-${shift}px)`;
});

btnPrev.addEventListener('click', () => {
    if (currentSlide < countSlide + 1){
        currentSlide--;
        btnNext.removeAttribute("disabled");
    }
    else{
       btnNext.setAttribute("disabled", "true");
    }
    let shift2 = currentSlide * widthSlide;
    slider.style.transform = `translateX(-${shift2}px)`; 
})