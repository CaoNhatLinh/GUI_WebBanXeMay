//TODO: Get Provinces API
var getProvincesApi = 'https://provinces.open-api.vn/api/';

var provinceSelect = document.getElementById('provinceSelect');

fetch(getProvincesApi)
    .then(function(response){
        return response.json();
    })
    .then(function(provinces){

        provinces.forEach(function(province) {
            var option = document.createElement('option');
            option.value = province.code;
            option.text = province.name;
            provinceSelect.add(option);
    })
})


var getDistrictsApi = 'https://provinces.open-api.vn/api/d/';

fetch(getDistrictsApi)
    .then(function(response){
        return response.json();
    })
    .then(function(districts){

        var districtsSelect = document.getElementById('districtsSelect');

        provinceSelect.addEventListener('change',()=>{

            // Xoá toàn bộ option
            while (districtsSelect.firstChild) {
                districtsSelect.removeChild(districtsSelect.firstChild);
            }
            // Thêm các option mới
            districts.forEach(function(district) {

                if(provinceSelect.value == district.province_code){
    
                    var option = document.createElement('option');
                    option.value = district.code;
                    option.text = district.name;
                    districtsSelect.add(option);
                }
            })
        })
})

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//TODO: Thông tin thanh toán
var nameMethod = $$('.money span')

//TODO: Lựa chọn tỉnh/ thành phố để tính phí vận chuyển (mặc định)
var addressList = $$('.address-select select')



var transportFee = 0;
var temp = 0;
for(var i = 0; i < addressList.length; i++){
    addressList[i].onchange = function(e){
        console.log(e.target.value)
        if(e.target.value != null){
            this.options[0].style.display = 'none';
        }
        //Gán phí vận chuyển
        if(e.target.value == '50'){
            transportFee = 300000;
            nameMethod[1].innerHTML = transportFee.toLocaleString()+'₫';
            sum.innerHTML = tinhTong().toLocaleString();
        }
        else{
            transportFee = 700000;
            nameMethod[1].innerHTML = transportFee.toLocaleString()+'₫';
            sum.innerHTML = tinhTong().toLocaleString();
        }
    }
}

// TODO: Lựa chọn phương thức vận chuyển
var deliveryMethodList = $$('.delivery-method')

// Phương thức giao hàng
deliveryMethodList[0].onchange = function(e){

    if(e.target.checked == true){
        transportFee = temp
        nameMethod[1].innerHTML = transportFee.toLocaleString() + '₫'
        nameMethod[2].innerHTML = this.querySelector('label').innerHTML;
        sum.innerHTML = tinhTong().toLocaleString()
    }
}

//Phương thức nhận tại cửa hàng
deliveryMethodList[1].onchange = function(e){
    if(e.target.checked == true){
        temp = transportFee;
        transportFee = 0;
        nameMethod[1].innerHTML = transportFee.toLocaleString() + '₫';
        nameMethod[2].innerHTML = this.querySelector('label').innerHTML
        sum.innerHTML = tinhTong().toLocaleString()
    }
}

//TODO: Phương thức thanh toán
var payMethod = $$('.pay-method')

payMethod[0].onchange = function(e){
    if(e.target.checked == true){
        nameMethod[3].innerHTML = this.querySelector('label').innerHTML
    }
}
payMethod[1].onchange = function(e){
    if(e.target.checked == true){
        nameMethod[3].innerHTML = this.querySelector('label').innerHTML
    }
}

//Todo: Tính tổng tiền
var sum = $('.total .number span');
var quantily = $('.payment-info__quantily').innerText;
var price = 73290000;

var priceShow = $('.payment-info .price')
priceShow.innerHTML = price.toLocaleString() + '₫'

function tinhTong(){
    return quantily * 73290000 + transportFee;
}
sum.innerHTML = tinhTong().toLocaleString()

