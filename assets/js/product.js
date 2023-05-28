const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// data
    
const showItem = $(".product"),
SecMotorbike = $$(".sec__item"),
motorbike = $$(".sec__item a"),
productList = $$(".product__list");

SecMotorbike.forEach((item, index, arr)=> {
   SecMotorbike[index].addEventListener("click",()=>{
       
       for(let i = 0; i <= motorbike.length; i++)
       {
           if (index == i)
           {
               SecMotorbike[i].classList.add("active");
               productList[i].classList.add("show-item");
           }
           else 
           {
               SecMotorbike[i].classList.remove("active");
               productList[i].classList.remove("show-item");


           }

       }
   })
   
})




let listCartData = [];

const listXeTayGa = $('#a');
const listXeSo = $('#b');
const listXeConTay = $('#c');

function renderXe() {
    renderXeTayGa();
    renderXeSo();
    renderXeConTay();
}
renderXe();

function renderXeTayGa() {
    const htmls = dataMotorbike.xeTayGa.map((motorbike, index) => {
        return renderTayGa(motorbike, index);
    })
    listXeTayGa.innerHTML = htmls.join('');
}

function renderXeSo() {
    const htmls = dataMotorbike.xeSo.map((motorbike, index) => {
        return renderSo(motorbike, index)
    });
    listXeSo.innerHTML = htmls.join('');
}

function renderXeConTay() {
    const htmls = dataMotorbike.xeConTay.map((motorbike, index) => {
        return renderConTay(motorbike, index);
    })
    console.log(htmls);
    listXeConTay.innerHTML = htmls.join('');
}



function renderTayGa(motorbike, index) {
    return `
    <div class="product__item">
      <div class="product__item-content">
        <div class="product__item-bg">
          <a href="${motorbike.link}">
            <img
              src='${motorbike.img}'
              alt='${motorbike.subName}'
            />
          </a>
        </div>
        <h1 class="name-item">
          <a href="${motorbike.link}"
            >${motorbike.name}</a
          >
        </h1>
        <div class="price-item">${convert(motorbike.price)}</div>
      </div>
    </div>`
}

function renderSo(motorbike, index) {
    return `
    <div class="product__item">
      <div class="product__item-content">
        <div class="product__item-bg">
          <a href="${motorbike.link}">
            <img
              src='${motorbike.img}'
              alt='${motorbike.subName}'
            />
          </a>
        </div>
        <h1 class="name-item">
          <a href="${motorbike.link}"
            >${motorbike.name}</a
          >
        </h1>
        <div class="price-item">${convert(motorbike.price)}</div>
      </div>
    </div>`
}
function renderConTay(motorbike, index) {
    return `
    <div class="product__item">
      <div class="product__item-content">
        <div class="product__item-bg">
          <a href="${motorbike.link}">
            <img
              src='${motorbike.img}'
              alt='${motorbike.subName}'
            />
          </a>
        </div>
        <h1 class="name-item">
          <a href="${motorbike.link}"
            >${motorbike.name}</a
          >
        </h1>
        <div class="price-item">${convert(motorbike.price)}</div>
      </div>
    </div>`
}



function convert(number) {
    let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    vnd = vnd.replace('.', ',');
    return vnd;
}




