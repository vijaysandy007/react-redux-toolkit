import React, { useState } from 'react';
import { Products } from './products-list';
import './product-list.css'
import {useDispatch} from "react-redux"
import { add } from '../slicers/cart';

const Dashboard = () => {
    const [products, setProducts] = useState(Products);
    const addAction = useDispatch()

  function getProductValue(value){

    addAction(add(value))
    }

    return (
        <div >
            <h1>Dashboard</h1>

            <div className='product-flex'>
                {products.map((data, index) => (
                    <div key={index}  className='products-card'>
                        <img src={data.img} alt="" />
                        <p>{data.id}</p>
                        <button onClick={() => getProductValue(data)}>Add To Cart</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Dashboard
