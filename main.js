// Change nav bar style on Scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 100)
})




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