import { useState, useEffect, useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const [btnIsHeighthted, setBtnIsHightlighted] = useState(false)
  const cartCtx = useContext(CartContext)
  console.log('#cartCtx', cartCtx)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const { items } = cartCtx

  const btnClasses = `${classes.button} ${btnIsHeighthted ? classes.bump : ''}`

  useEffect(() => {
    if(items.length === 0){
      return
    }
    setBtnIsHightlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHightlighted(false)
    },300)

    return () => {
      clearTimeout(timer)
    }
  },[items])

  return <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
     {numberOfCartItems}
    </span>
  </button>
}

export default HeaderCartButton