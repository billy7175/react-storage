import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount:0
}

const cartReducer = (state, action) => {
  console.log('#ACTION', action)
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

  if(action.type === 'REMOVE'){
    const existingCardItemIndex = state.items.findIndex(item => item.id === action.id)
    const existingItem = state.items[existingCardItemIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price
    let updatedItems

    console.log('#existingItem', existingItem)
    if(existingItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem = {...existingItem, amount :existingItem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem
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
