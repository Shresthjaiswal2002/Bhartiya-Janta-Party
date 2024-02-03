let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween:"100%", // You can adjust this value
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Make sure loop is set to true
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;
document.addEventListener("DOMContentLoaded", function() {
  const orderForm = document.getElementById("orderForm");

  orderForm.addEventListener("submit", function(event) {
      // Prevent the form from submitting by default
      event.preventDefault();

      // Validation logic for the form fields
      const name = orderForm.querySelector('[name="name"]').value;
      const mobile = orderForm.querySelector('[name="mobile"]').value;
      const email = orderForm.querySelector('[name="email"]').value;
      const address = orderForm.querySelector('[name="address"]').value;

      // Regular expression for validating email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validation checks
      if (name.trim() === "") {
          alert("Please enter your name.");
          return;
      }

      if (mobile.trim() === "" || !/^\d{10}$/.test(mobile)) {
          alert("Please enter a valid 10-digit mobile number.");
          return;
      }

      if (email.trim() === "" || !emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (address.trim() === "") {
          alert("Please enter your address.");
          return;
      }

      // If all validations pass, you can submit the form
      // Uncomment the following line to submit the form:
      // orderForm.submit();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const eyeButtons = document.querySelectorAll(".fas.fa-eye");
  const overlay = document.querySelector(".overlay");
  const zoomImg = document.querySelector(".zoom-img");

  eyeButtons.forEach((button) => {
      button.addEventListener("click", function () {
          const imgSrc = this.parentNode.querySelector("img").src;
          zoomImg.src = imgSrc;
          overlay.style.display = "flex";
      });
  });

  overlay.addEventListener("click", function () {
      overlay.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuBars = document.getElementById("menu-bars");
  const navbar = document.querySelector(".navbar");
});
const footerSection = document.querySelector('.footer_section');

window.addEventListener('resize', function() {
  if (window.innerWidth < 500) {
    footerSection.classList.add('responsive');
  } else {
    footerSection.classList.remove('responsive');
  }
});
