
// Total price calcul !
var priceUnit = document.querySelectorAll(".price_product")
var totalPrice = document.querySelector(".price_number")
var quantityProduct = document.querySelectorAll(".qut")
var totalProduct = 0
var i = 0


for (const value of priceUnit){
  totalProduct = totalProduct + (parseInt(value.innerHTML))*quantityProduct[i].innerHTML;
  i++;
}
totalPrice.innerHTML= totalProduct;

//Increment and decrement button quantity
var plusButton = document.querySelectorAll(".fa-plus")
var minusButton = document.querySelectorAll(".fa-minus")
var quantityValue = document.querySelectorAll(".qut")
var j = 1;

for (const pb of plusButton) {
    
}


// Like button
var hearts = document.querySelectorAll(".fa-heart")

for (const heart of hearts) {
  heart.addEventListener('click',function(){
    if(heart.classList.contains("red")){
      heart.classList.remove("red")
      heart.classList.add("white")
    }
    else{
      heart.classList.remove("white")
      heart.classList.add("red")
    }
  })
}