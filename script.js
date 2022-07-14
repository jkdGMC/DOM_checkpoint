function totalPrix(){
  var priceUnit = document.querySelectorAll(".price_product")
  var totalPrice = document.querySelector(".price_number")
  var quantityProduct = document.querySelectorAll(".qut")
  var totalProduct = 0
  var i = 0


for (const value of priceUnit){
  totalProduct = totalProduct + (parseInt(value.innerHTML))*parseInt(quantityProduct[i].innerHTML);
  i++;
}
totalPrice.innerHTML= totalProduct;

}

//Increment and decrement button quantity
  var plusButtons = document.querySelectorAll(".fa-plus")
  var minusButtons = document.querySelectorAll(".fa-minus")
  var quantityValues = document.querySelectorAll(".qut")
  var j = 1;


  // Quantity default : j (1)
  for (const quantity of quantityValues) {
    quantity.innerHTML = j;
  }

  
  //increment button on click
  totalPrix();
  for (const btnPlus of plusButtons) {
    
    btnPlus.addEventListener('click', function (){

      var iconEl = btnPlus.parentElement
      var product = iconEl.parentElement
      var quantityButton = product.querySelector(".qut")
      var increment = parseInt(quantityButton.innerHTML)

      increment++;
      quantityButton.innerHTML = increment;

      totalPrix();

    })

  }

  //Decrement button on click
  for (const btnMinus of minusButtons) {
    btnMinus.addEventListener('click', function (){

      var iconEl = btnMinus.parentElement
      var product = iconEl.parentElement
      var quantityButton = product.querySelector(".qut")
      var decrement = parseInt(quantityButton.innerHTML)

      if (decrement > 1) {
        decrement--;
        quantityButton.innerHTML = decrement
      }
      totalPrix();

    })
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

// Delete product
var delButtons = document.querySelectorAll(".fa-xmark")

for (const delBtn of delButtons) {

  delBtn.addEventListener('click',function(){

    var hasConfirmed = confirm("Voulez vous vraiment supprimer le produit du panier ?")

    if (hasConfirmed) {
      var iconTd = delBtn.parentElement
      var product = iconTd.parentElement
    
      product.remove();
      totalPrix();
    }
  })

}
