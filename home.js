// Change nav bar style on Scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 100)
})


// Slider

"use strict";
const leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  slider = document.querySelector(".slider");

/**
 * @brief Scroll to the right
 */
function scrollRight() {
  if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    slider.scrollBy({
      left: window.innerWidth,
      behavior: "smooth"
    });
  }
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
  slider.scrollBy({
    left: -window.innerWidth,
    behavior: "smooth"
  });
}

// Auto slider
let timerId = setInterval(scrollRight, 4000);

/**
 * @brief Reset timer for scrolling right
 */
function resetTimer() {
  clearInterval(timerId);
  timerId = setInterval(scrollRight, 7000);
}

// Scroll Events
slider.addEventListener("click", function (ev) {
  if (ev.target === leftArrow) {
    scrollLeft();
    resetTimer();
  }
});

slider.addEventListener("click", function (ev) {
  if (ev.target === rightArrow) {
    scrollRight();
    resetTimer();
  }
});





// Show and Hide Answer

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
   

    // Change Icon
    const icon=faq.querySelector('.faq__icon i');
    if(icon.className === "ri-add-line") {
        icon.className = "ri-subtract-line";
    } else{
        icon.className= "ri-add-line" ;
    }
    })
})

// show and hide nav menu

    const menu=document.querySelector(".nav__menu");
    const menuBtn=document.querySelector("#open-menu-btn");
    const closeBtn=document.querySelector("#close-menu-btn");

    menuBtn.addEventListener('click',()=>{
        menu.style.display='flex';
        closeBtn.style.display='inline-block';
        menuBtn.style.display='none';
    })

    // close nav menu
    const closeNav =()=>{
        menu.style.display='none';
        closeBtn.style.display='none';
        menuBtn.style.display='inline-block';
    }

    closeBtn.addEventListener('click',closeNav)