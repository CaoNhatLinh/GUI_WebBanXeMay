



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
        if (itemTop < window.innerHeight * 0.8) {
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

const btnsignIn = document.querySelectorAll(".signIn");
const btnsignUp = document.querySelectorAll(".signUp");


function createSignIn()
{
  const login = document.querySelector(".login");
    let signInModal = document.createElement('div');
    signInModal.setAttribute('id','signIn-modal');
    signInModal.innerHTML = `
          <div class="login-container">
            <form onsubmit="signIn()">
              <input type="checkbox" class="input-check" id="input-check" />
              <label for="input-check" class="toggle">
                <span class="text off">Off</span>
                <span class="text on">On</span>
              </label>
              <div class="login-close">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="login-light"></div>
              <h2>Login</h2>
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="username"></ion-icon>
                </span>
                <input id="username" type="text" required="required" />
                <label>Tên đăng nhập</label>
                <div class="input-line"></div>
              </div>

              <div class="input-box">
                <span class="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input id="password" type="password" required="required" />
                <label>Mật Khẩu</label>
                <div class="input-line"></div>
              </div>

              <div class="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Nhớ đăng nhập
                </label>
                <a href="#">Quên Mật Khẩu?</a>
              </div>
              <button type="submit">Đăng nhập</button>
              <div class="register-link">
                <p>
                  Bạn chưa có tài khoản?
                  <a href="#!" id="signIn">Đăng ký</a>
                </p>
              </div>
            </form>
          </div>
        `
        login.appendChild(signInModal);
        const btnCloselogin = document.querySelectorAll(".login-close");
        btnCloselogin[0].addEventListener("click", () =>{
          login.removeChild(signInModal);
        })
        const changesignUp = document.querySelector("#signIn");
        changesignUp.addEventListener("click", ()=> {
        login.removeChild(signInModal);
        createSignUp();
      }) 

}
function createSignUp() {
  const login = document.querySelector(".login");
  let signUpModal = document.createElement('div');
  signUpModal.setAttribute('id','signUp-modal');
  signUpModal.innerHTML = `
  <div class="login-container">
    <form onsubmit="signUp()">
      <input type="checkbox" class="input-check" id="input-check1" />
      <label for="input-check1" class="toggle">
        <span class="text off">Off</span>
        <span class="text on">On</span>
      </label>
      <div class="login-close">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="login-light"></div>
      <h2>REGISTER</h2>
      <div class="input-box">
        <span class="icon">
          <ion-icon name="username"></ion-icon>
        </span>
        <input id="usernameSignUp" type="text" required="required" />
        <label>Tên đăng nhập</label>
        <div class="input-line"></div>
      </div>

      <div class="input-box">
        <span class="icon">
          <ion-icon name="lock-closed"></ion-icon>
        </span>
        <input
          id="passwordSignUp"
          type="password"
          required="required"
        />
        <label>Mật khẩu</label>
        <div class="input-line"></div>
      </div>
      <div class="input-box">
        <span class="icon">
          <ion-icon name="lock-closed"></ion-icon>
        </span>
        <input
          id="forgot-password-SignUp"
          type="password"
          required="required"
        />
        <label>Nhập lại mật khẩu</label>
        <div class="input-line"></div>
      </div>
      <button type="submit">Đăng ký</button>
      <div class="register-link">
        <p>
          đã có tài khoản
          <a id="signUp" href="#">đăng nhập</a>
        </p>
      </div>
    </form>
  </div>
      `
    login.appendChild(signUpModal);
    const btnCloselogin = document.querySelectorAll(".login-close");
    btnCloselogin[0].addEventListener("click", () =>{
          login.removeChild(signUpModal);
        })
      const changesignUp = document.querySelector("#signUp");
      changesignUp.addEventListener("click", ()=> {
        login.removeChild(signUpModal);
        createSignIn();
    }) 
}
btnsignUp.forEach((item,index,array) => {
    btnsignUp[index].addEventListener("click",()=>{
    createSignUp();
    })
})

btnsignIn.forEach((item,index,array) => {
        btnsignIn[index].addEventListener("click",()=>{
        createSignIn();
      })
})
function createCardSuccess(){
  const login = document.querySelector(".login");
  let cardSuccess = document.createElement('div');
  cardSuccess.classList.add("success-modal");
  cardSuccess.innerHTML = `
  <div class="card-success">
            <div class="success-close">
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="success-icon">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <span class="success-title">Đăng ký thành công</span>
    </div>`
    login.appendChild(cardSuccess);
    const closeSuccessModal = document.getElementsByClassName("success-close");
    closeSuccessModal[0].addEventListener("click",()=>{
    login.removeChild(cardSuccess);
    createSignIn();
      })
}
function signIn(e){
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if(user == null ){
    alert("Vui lòng nhập đúng tên đăng nhập và mật khẩu!");

  }
  else if(username==data.username && password == data.password)
  {
    window.location.href="../../admin.html";
  }
  else 
  alert("Vui lòng nhập đúng tên đăng nhập và mật khẩu!");
}
function signUp(e){
  
  event.preventDefault();
  const successModal = document.getElementsByClassName("success-modal");
  const login = document.querySelector(".login");
  const signUpModal = document.getElementById("signUp-modal");
  var username = document.getElementById("usernameSignUp").value;
  var password = document.getElementById("passwordSignUp").value;
  var user = {
    username : username,
    password : password,
  }
  var json = JSON.stringify(user);
  localStorage.setItem(username,json);
  login.removeChild(signUpModal);
  createCardSuccess();
  successModal[0].classList.add("active");
  
}
const serviceClose = document.querySelector("#service");

const serviceList = document.querySelector(".service");
const arrow = document.querySelector(".arrow-down-icon");
serviceClose.addEventListener("click",()=>{
  arrow.classList.toggle("active");
})
serviceClose.addEventListener("click",()=>{
  serviceList.classList.toggle("active");
})

