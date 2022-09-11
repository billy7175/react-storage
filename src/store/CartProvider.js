import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount:0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

    const existingCardItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCardItem = state.items[existingCardItemIndex];

    let updatedItem;
    let updatedItems;

    if(existingCardItem){
      updatedItem = {
        ...existingCardItem,
        amount : existingCardItem.amount + action.item.amount
      }

      updatedItems = [...state.items]
      updatedItems[existingCardItemIndex] = updatedItem
    } else {
      updatedItem = { ...action.item }
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount : updatedTotalAmount
    }
  }
  return defaultCartState
} 

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item})
  };
  const removeItemFromCartHanlder = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHanlder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
