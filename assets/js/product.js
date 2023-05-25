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



let dataMotorbike = {
    xeTayGa: [
        {
            id: 1,
            name: "Air Blade 125",
            subName: "Xe tay ga",
            price: 150990000,
            img: "https://phattien.com/wp-content/uploads/2020/01/20220524-air-blade-125-chi-tiet-xe-tieu-chuan-xanh-den.png",
            tag: 1
        },
        {
            id: 2,
            name: "Air Blade 160",
            subName: "Xe tay ga",
            price: 2500000,
            img: "https://phattien.com/wp-content/uploads/2020/01/ab.png",
            tag: 1
        },
        {
            id: 3,
            name: "Honda LEAD 125",
            subName: "Xe tay ga",
            price: 56490000,
            img: "https://phattien.com/wp-content/uploads/2019/10/lead-550x400.png",
            tag: 1
        },
        {
            id: 4,
            name: "Honda SH125i",
            subName: "Xe tay ga",
            price: 56490000,
            img: "https://phattien.com/wp-content/uploads/2019/10/sh125i-xam-den-removebg-preview.png",
            tag: 1
        },
        {
            id: 5,
            name: "SH 125i/160i",
            subName: "Xe tay ga",
            price: 56490000,
            img: "https://phattien.com/wp-content/uploads/2019/10/sh160.png",
            tag: 1
        },
        {
            id: 6,
            name: "Honda SH350i",
            subName: "Xe tay ga",
            price:56490000,
            img: "https://phattien.com/wp-content/uploads/2019/10/SH350i-ban-dac-biet-bac-den.png",
            tag: 1
        },

        {
            id: 7,
            name: "Honda VARIO 160",
            subName: "Xe tay ga",
            price: 56490000,
            img: "https://phattien.com/wp-content/uploads/2022/12/vario-the-thao-xam-den-bac1-e1672364326339-550x400.png",
            tag: 1
        },
       
        {
            id: 8,
            name: "Sh Mode 125",
            subName: "Xe tay ga",
            price: 56490000,
            img: "https://phattien.com/wp-content/uploads/2020/07/gf8B4s14htSXebW5PrFy-1-768x558.png",
            tag: 1
        }

    ],

    xeSo: [
        {
            id: 1,
            name: "Honda BLADE 110",
            subName: "Xe Số",
            price: 150990000,
            img: "https://phattien.com/wp-content/uploads/2019/10/blade-dac-biet-den.png",
            tag: 2
        },
        {
            id: 2,
            name: "Wave ALPHA 110",
            subName: "Xe Số",
            price: 2500000,
            img: "https://phattien.com/wp-content/uploads/2019/10/20220823-wave-alpha-2023-chi-tiet-xe-dac-biet-den-mo.png",
            tag: 2
        },
        {
            id: 3,
            name: "Wave RSX FI",
            subName: "Xe Số",
            price: 56490000,
            img: "https://phattien.com/wp-content/uploads/2019/10/wave-den-phanh-dia.png",
            tag: 2
        },
        {
            id: 4,
            name: "Honda FUTURE",
            subName: "Xe Số",
            price: 56490000,
            img: "https://phattien.com/wp-content/uploads/2019/10/Fu-dac-biet-xanh-den.png",
            tag: 2
        },
        {
            id: 5,
            name: "SUPER CUB C125",
            subName: "Xe Số",
            price:54490000,
            img: "https://phattien.com/wp-content/uploads/2019/10/20211025-Super-Cub-C125-chi-tiet-xe-ban-tieu-chuan-xanh-trang.png",
            tag: 2
        }
    ],

    xeConTay: [
        {
            id: 1,
            name: "Honda CB150R",
            subName: "Xe Côn Tay",
            price: 150990000,
            img: "https://phattien.com/wp-content/uploads/2019/10/20220524-cb150r-chi-tiet-xe-tieu-chuan-den.png",
            tag: 3
        },
        {
            id: 2,
            name: "Honda WINNER X",
            subName: "Xe Côn Tay",
            price: 2500000,
            img: "https://phattien.com/wp-content/uploads/2021/10/11102021-cbr150r-chi-tiet-xe-den-xam.png",
            tag: 3
        },
        {
            id: 3,
            name: "Honda WINNER X",
            subName: "Xe Côn Tay",
            price: 56490000,
            img: "https://phattien.com/wp-content/uploads/2019/10/20211224-winner-x-chitietxe-dacbiet-dodenxanh.png",
            tag: 3
        },
        
    ]
}
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
    listXeConTay.innerHTML = htmls.join('');
}



function renderTayGa(motorbike, index) {
    return `
    <div class="product__item">
      <div class="product__item-content">
        <div class="product__item-bg">
          <a href="./san-pham/product-detail-1.html">
            <img
              src='${motorbike.img}'
              alt='${motorbike.subName}'
            />
          </a>
        </div>
        <h1 class="name-item">
          <a href="./san-pham/product-detail-1.html"
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
          <a href="./san-pham/product-detail-1.html">
            <img
              src='${motorbike.img}'
              alt='${motorbike.subName}'
            />
          </a>
        </div>
        <h1 class="name-item">
          <a href="./san-pham/product-detail-1.html"
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
          <a href="./san-pham/product-detail-1.html">
            <img
              src='${motorbike.img}'
              alt='${motorbike.subName}'
            />
          </a>
        </div>
        <h1 class="name-item">
          <a href="./san-pham/product-detail-1.html"
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


