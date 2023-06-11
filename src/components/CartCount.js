import React from 'react'
import {useSelector} from 'react-redux'

const CartCount = () => {

    const cartStore = useSelector(store => store.cart);
    console.log("cartStore",cartStore);

  return (
    <div>
      <h1>Count: {cartStore.length}</h1>
    </div>
  )
}

export default CartCount
