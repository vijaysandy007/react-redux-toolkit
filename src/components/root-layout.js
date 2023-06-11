import React from 'react';
import {Outlet} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store/store'
import NavBar from './nav';
import CartCount from './CartCount';

const RootLayout = () => {
  return (
    <div>
        <Provider store={store}>

        <NavBar/>

        <CartCount/>

        <main>
        <Outlet/>
        </main>

        </Provider>
      
    </div>
  )
}

export default RootLayout
