const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', revealSection);

function revealSection(){

    reveals.forEach((section)=>{

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 100;
        if(sectionTop < windowHeight - revealPoint){
            section.classList.add('active');
        }
    });
}

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = 
document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});
const copyright = document.getElementById('copyright');
copyright.innerHTML = `© ${new Date().getFullYear()} NovaTech. All rights reserved.`