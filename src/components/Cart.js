import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../slicers/cart';

const Cart = () => {

    const cartStore = useSelector(store => store.cart);
    console.log(cartStore);

    const removeDispatch = useDispatch()

    function removeCart(id){
        console.log(id);
        removeDispatch(remove(id))
    } 

    return (
        <div>
            <h1>Cart</h1>

            <div className='product-flex'>

                {cartStore && cartStore.map((data, index) => (
                    <div key={index} className='products-card'>
                        <img src={data.img} alt="" />
                        <p>{data.id}</p>
                        <button onClick={()=> removeCart(data.id)}>Remove To Cart</button>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Cart
