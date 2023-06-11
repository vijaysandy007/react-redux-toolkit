import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from '../../react-reduxotoolkit-1/src/components/root-layout';
import Dashboard from '../../react-reduxotoolkit-1/src/components/dashboard';
import Cart from '../../react-reduxotoolkit-1/src/components/Cart';



function App() {
  return (
    <div className="App">
         <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
