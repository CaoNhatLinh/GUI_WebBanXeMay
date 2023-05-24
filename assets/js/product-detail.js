const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-panel");

const tabActive = $(".tab-item.active");
const line = $(".tabs .tab-line");

//Active size wrong size on first load.
requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-panel.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
    };
});


// tabs.forEach((tab, index) => {
//     const pane = panes[index];

//     tab.addEventListener("touchstart", function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-panel.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//     });

//     // Nếu bạn muốn giữ lại sự kiện click trên desktop,
//     // hãy thêm sự kiện click vào đây.
    
//     tab.addEventListener("click", function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-panel.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//     });
// });


const plus = $(".product__buy-plus");

const minus = $(".product__buy-minus");
const values = $("#quantity");
plus.addEventListener("click",function(){
    let a = values.value;
    a++;
    if(a < 999){
    values.setAttribute("value",a);
    }
    else
    a = 999
} )
minus.addEventListener("click",function(){
    let a = values.value;
    if(a>0)
    { a--;
        values.setAttribute("value",a);
    }
    else a=0;
    
} )

const statusAddCart = $('.status');
const listStatus = $('.list__status');
const addCart = $('.add-to-cart');

addCart.addEventListener("click",()=>{
    statusAddCart.style.display = 'block';
    let status = document.createElement('li');
    status.classList.add('item__status');
    status.innerHTML = `
                        <div class="item__status-container">
                            <h3>THÊM SẢN PHẨM THÀNH CÔNG</h3>
                            <div class="icon__success">
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="item__status-message">
                                “Bạn đã thêm sản phẩm vào giỏ hàng <i class="fa-solid fa-cart-shopping"></i>”
                            </div>
                        </div>`
    listStatus.appendChild(status);
    removeStatus(status);
    resetCart();
})
