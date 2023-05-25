const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//TODO: Thông tin thanh toán
var nameMethod = $$('.money span')

//TODO: Lựa chọn tỉnh/ thành phố để tính phí vận chuyển
var addressList = $$('.address-select select')

$('.receive').style.display = 'none'
$('.showroom').style.display = 'none'

var transportFee = 0;
for(var i = 0; i < addressList.length; i++){
    addressList[i].onchange = function(e){
        if(e.target.value != null){
            this.options[0].style.display = 'none'
        }
        //Gán phí vận chuyển
        if(e.target.value == '50'){
            transportFee = 300000
            nameMethod[1].innerHTML = transportFee.toLocaleString()+'₫'
            sum.innerHTML = tinhTong().toLocaleString()
        }
        else{
            transportFee = 700000
            nameMethod[1].innerHTML = transportFee.toLocaleString()+'₫'
            sum.innerHTML = tinhTong().toLocaleString()
        }
    }
}

// TODO: Lựa chọn phương thức vận chuyển
var deliveryMethod = $$('.delivery-method')

deliveryMethod[0].onchange = function(e){
    if(e.target.checked == true){
        $('.receive').style.display = 'none'
        $('.showroom').style.display = 'none'
        $('.delivery').style.display = 'block'
        console.log([e.target])
        console.log(e.target.value)

        nameMethod[2].innerHTML = this.querySelector('label').innerHTML;
        if(e.target.value == '50'){
            transportFee = 300000
            nameMethod[1].innerHTML = transportFee.toLocaleString()+'₫'
            sum.innerHTML = tinhTong().toLocaleString()
        }
        else{
            transportFee = 700000
            nameMethod[1].innerHTML = transportFee.toLocaleString()+'₫'
            sum.innerHTML = tinhTong().toLocaleString()
        }
        // for(var i = 0; i < addressList.length; i++){
        //     addressList[i].onchange = function(e){
        //         //Gán phí vận chuyển
        //         if(e.target.value == '50'){
        //             transportFee = 300000
        //             nameMethod[1].innerHTML = transportFee.toLocaleString()+'₫'
        //             sum.innerHTML = tinhTong().toLocaleString()
        //         }
        //         else{
        //             transportFee = 700000
        //             nameMethod[1].innerHTML = transportFee.toLocaleString()+'₫'
        //             sum.innerHTML = tinhTong().toLocaleString()
        //         }
        //     }
        // }
    }
}
deliveryMethod[1].onchange = function(e){
    if(e.target.checked == true){
        number = 0
        $('.receive').style.display = 'flex'
        $('.showroom').style.display = 'block'
        $('.delivery').style.display = 'none'
        nameMethod[1].innerHTML = number + '₫'
        nameMethod[2].innerHTML = this.querySelector('label').innerHTML
        sum.innerHTML = tinhTong().toLocaleString()
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

//Todo: Tính tổng tiền
var sum = $('.total .number span')
var quantily = $('.payment-info__quantily').innerText
var price = 73290000;
var priceShow = $('.payment-info .price')
priceShow.innerHTML = price.toLocaleString() + '₫'

function tinhTong(){
    return quantily * 73290000 + transportFee;
}