const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


var nameMethod = $$('.money span');

// TODO: Lựa chọn phương thức vận chuyển
var deliveryMethod = $$('.delivery-method')
var address = $('.address-select select option')

$('.receive').style.display = 'none'
$('.showroom').style.display = 'none'
deliveryMethod[0].onchange = function(e){
    if(e.target.checked == true){
        $('.receive').style.display = 'none'
        $('.showroom').style.display = 'none'
        $('.delivery').style.display = 'block'
        nameMethod[1].innerHTML = '_'
        nameMethod[2].innerHTML = this.querySelector('label').innerHTML;
    }
}
deliveryMethod[1].onchange = function(e){
    if(e.target.checked == true){
        $('.receive').style.display = 'flex'
        $('.showroom').style.display = 'block'
        $('.delivery').style.display = 'none'
        nameMethod[1].innerHTML = '0₫'
        nameMethod[2].innerHTML = this.querySelector('label').innerHTML
        
    }
}

//TODO: Phương thức thanh toán
var payMethod = $$('.pay-method')

payMethod[0].onchange = function(e){
    if(e.target.checked == true){
        nameMethod[3].innerHTML = this.querySelector('span').innerHTML
    }
}
payMethod[1].onchange = function(e){
    if(e.target.checked == true){
        nameMethod[3].innerHTML = this.querySelector('span').innerHTML
    }
}