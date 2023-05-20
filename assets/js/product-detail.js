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

const plus = $(".product__buy-plus");

const minus = $(".product__buy-minus");
const values = $("#quantity");
plus.addEventListener("click",function(){
   let a = values.value;
   a++;
   values.setAttribute("value",a);
} )
minus.addEventListener("click",function(){
    let a = values.value;
    if(a>0)
    { a--;
        values.setAttribute("value",a);
    }
    else a=0;
   
 } )