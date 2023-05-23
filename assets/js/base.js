



/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}
const animateItems = document.querySelectorAll('.animate-item');

window.addEventListener("scroll", function () {
    animateItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight * 0.9) {
            item.classList.add("animate-item-show");
        }
    });
});


function debounce(func, wait = 15, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


function checkAnimate() {
    animateItems.forEach(item => {
        const triggerPoint = (window.innerHeight / 5) * 4;
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerPoint) {
            item.classList.add('animate-item-show');
        } else {
            item.classList.remove('animate-item-show');
        }
    });
}
window.addEventListener('scroll', debounce(checkAnimate));

// button scroll top

const scrollToTopButton = document.getElementById("scroll-to-top-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        scrollToTopButton.style.opacity = 1;
    } else {
        scrollToTopButton.style.opacity = 0;
    }
});


// scroll select menu 

function smoothScroll(event) {
    const targetId = event.target.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// const links = document.querySelectorAll("header a");
// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", smoothScroll);
// }



            
        



/**
 * MOBILE NAVBAR
 * navbar will show after clicking menu button
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}






const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);



/**
 * Button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);



/**
 * Scroll reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/**
 * Custom cursor
 */

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});

//sign modal


const signUpModal = document.querySelector("#signUp-modal");
const signInModal = document.querySelector("#signIn-modal");

const btnsignUp = document.querySelector("#signUp");
const btnsignIn = document.querySelector("#signIn");
btnsignUp.addEventListener("click", ()=> {
  signUpModal.classList.add("active");
}) 
btnsignIn.addEventListener("click", ()=> {
  signInModal.classList.add("active");
})

window.addEventListener("click", ()=> {
  if (window.event.target == signUpModal) {
    signUpModal.classList.remove("active")
  }
  if (window.event.target == signInModal) {
    signInModal.classList.remove("active")
  }
}) 

const serviceClose = document.querySelector("#service");

const serviceList = document.querySelector(".service");

serviceClose.addEventListener("click",()=>{
  serviceList.classList.toggle("active");
})