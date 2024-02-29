burger=document.querySelector('.burger')
navbarItems=document.querySelector('.navbar')
nav=document.querySelector('.items')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})

function scrollToSection(className) {
    var section = document.querySelector("." + className);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }