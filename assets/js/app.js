
// Mobile Navigation Button 

document.getElementById("mobile-nav-button").addEventListener("click", function() {
    document.querySelector("body").classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
})


// Mobile Nav Button Background

const button = document.querySelector('#mobile-nav-button');
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    button.classList.add('button-bg');
  } 
  else {
    button.classList.remove('button-bg');
  }
});


// Pre Loader 
let preloader = document.getElementById("preloader");
if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
  });
}


// Typed Animation

const typed = document.getElementById("typed");
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('#typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 4000
    });
  }


// AOS Activation

window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});


// Skill Animation

function animateSkills() {
  var skillsBars = document.getElementsByClassName("progress-bar");

  for (var i = 0; i < skillsBars.length; i++) {
    skillsBars[i].style.width = skillsBars[i].getAttribute("aria-valuenow") + "%";
  }
}

function checkSkillsSection() {
  var skillsSection = document.querySelector(".skill-content");
  var rect = skillsSection.getBoundingClientRect();
  var isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

  if (isInViewport) {
    animateSkills();
    window.removeEventListener("scroll", checkSkillsSection);
  }
}
window.addEventListener("load", checkSkillsSection);
window.addEventListener("scroll", checkSkillsSection);



// Form to Google Sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbz_jhA6zdWDRr9O0AM7Orvm7tGzU8C0j289G4KFev-8BlWPOipxExpVz2kK58-299xs/exec'
  const form = document.forms['submit-to-google-sheet']

  const message = document.getElementById('message');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Message sent successfully!";
        setTimeout(() => {
          message.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
})


// Back to Top
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('buttonVisible');
  } else {
    backToTopBtn.classList.remove('buttonVisible');
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

