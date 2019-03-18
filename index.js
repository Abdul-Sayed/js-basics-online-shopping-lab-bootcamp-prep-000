var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( { itemName: item, itemPrice: Math.floor( Math.random() * 101 ) } );
 return `${item} has been added to your cart.`;
}

function viewCart() {

  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
    let temp = [];
    for (let i = 0; i < cart.length; i += 1) {
      temp.push(` ${cart[i].itemName} at ${cart[i].itemPrice}`);
    }
    temp[0] = `In your cart, you have${temp[0]}`;
    temp[(cart.length - 1)] = ` and${temp[(cart.length - 1)]}`;

    return (temp.toString());

  }

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
