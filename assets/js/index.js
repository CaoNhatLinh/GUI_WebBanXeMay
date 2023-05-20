    
const showItem = document.querySelector(".product"),
SecMotorbike = document.querySelectorAll(".sec__item"),
motorbike = document.querySelectorAll(".sec__item a"),
productList = document.querySelectorAll(".product__list");

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
