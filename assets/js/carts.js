const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listgiohang = $("#list-carts");

let giohang = [
    {
        name: "SH 125i/160i",
        subName: "Xe tay ga",
        price: 56490000,
        img: "https://phattien.com/wp-content/uploads/2019/10/sh160.png",
        tag: 1
    },
    {
        id: 2,
        name: "Wave ALPHA 110",
        subName: "Xe Số",
        price: 12500000,
        img: "https://phattien.com/wp-content/uploads/2019/10/20220823-wave-alpha-2023-chi-tiet-xe-dac-biet-den-mo.png",
        tag: 2,
    }
]

function renderGiohang(){
    const htmls = []
        giohang.forEach((item, index,giohang) => {
            let a = rendergiohang1(giohang,index)
            htmls.push(a);
       });
       listgiohang.innerHTML = htmls.join('');

}
renderGiohang();

function rendergiohang1(giohang,index){

    return `
    <li class="cart-item">
    <div class="cart-info">
      <div class="cart-img">
        <img
          src="${giohang[index].img}"
          alt=""
        />
      </div>
      <div class="cart-name">${giohang[index].name}</div>
    </div>
    <div class="cart-quantity">
      <button class="minus change">-</button>
      <input
        type="text"
        min="0"
        value="1"
        name="SoLuong"
        class="quantity"
        disabled
      />
      <button class="plus change">+</button>
    </div>
    <span class="price">${convert(giohang[index].price)}</span>
  </li>`
}
function convert(number) {
    let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    vnd = vnd.replace('.', ',');
    return vnd;
}

const plus = $$(".plus");

const minus = $$(".minus");
const quantity = $$(".quantity")
const price = $$(".price")
quantity.forEach((item,index)=>{
    plus[index].addEventListener("click",()=>{
        let a = quantity[index].value;
        a++;
        if(a < 999){
          quantity[index].value = a;
        }
        else
        a = 999;
        changPrice()
    } )
    minus[index].addEventListener("click",()=>{
        let a = quantity[index].value;
        if(a>0)
    { a--;
      quantity[index].value = a
    }
    else a=0;
    changPrice();
    } )
    function changPrice(e){
        value = quantity[index].value;
        priceNew = giohang[index].price* value;
        price[index].innerHTML = convert(priceNew);
    }
})



 