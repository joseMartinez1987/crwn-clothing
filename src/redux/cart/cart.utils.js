export const addItemToCart = (cartItems, cartItemToAdd) => {

  const existingfCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if(existingfCartItem) {
      return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity:cartItem.quantity + 1 }
            :
            cartItem
        )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToREmove) => {

  const existingfCartItem = cartItems.find(cartItem => cartItem.id === cartItemToREmove.id)

  if(existingfCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToREmove.id) 
  }

  return cartItems.map(cartItem => (
    cartItem.id === cartItemToREmove.id ?
    {...cartItem, quantity: cartItem.quantity -1 }
    :
    cartItem
  ))

}
