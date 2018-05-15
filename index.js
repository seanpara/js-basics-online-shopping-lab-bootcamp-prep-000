var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) { 
  var obj = {}; 
  cart.push(
  {itemName:item, itemPrice: Math.floor(Math.random() * 101) }
  );
  return `${item} has been added to your cart.` ;
<<<<<<< HEAD
  return cart
=======
  return cart;
>>>>>>> 57a08e3bb2c0bef8f996f745587cbe6a8fe227ff
}

function viewCart() {
  var itemsInCart = []
  if (cart.length === 0){
    return "Your shopping cart is empty."
                        } 
  else { 
    for (var i = 0; i < cart.length; i++) {
      if (i === 0 ) {
        itemsInCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
          } 
      else if (0 < i && i < cart.length - 1) 
          {
            itemsInCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
          } 
      else if (i === cart.length - 1)                      
          {
          itemsInCart.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`) 
          }
        } 
    return 'In your cart, you have ' + itemsInCart + '.'
    }
  
}

<<<<<<< HEAD
=======
function total() { var total = 0; 
  for (var i = 0; i > cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}
>>>>>>> 57a08e3bb2c0bef8f996f745587cbe6a8fe227ff

function total() {
  var cartTotal = 0;
  for (var i = 0; cart.length > i; i++) {
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal;
 }
 
function removeFromCart(item) {
var cl = cart.length;
  for (var i = 0; i < cl; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  if (cart.length === cl) {
    return "That item is not in your cart."
  }
 }

 
function placeOrder(cardNumber) { var finalTotal = total() ; if (cardNumber === undefined) { return "Sorry, we don't have a credit card on file for you."} else {cart = []; return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.` }

}
