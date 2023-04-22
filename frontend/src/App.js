import './App.css';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import ProductDetail from './Component/Product/ProductDetail';
import Registration from './Component/Users/Registration';
import Login from './Component/Users/Login';
import { useEffect } from 'react';
import { loadUser } from './Actions/UserAction';
import { useDispatch } from 'react-redux';
import Profile from './Component/Users/Profile';
import Cart from './Component/Layout/Cart';
import UpdatePassword from './Component/Users/UpdatePassword';
import Checkout from './Component/Checkout/Checkout';
import Dashboard from './Component/Admin/Dashboard';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/updatePassword' element={<UpdatePassword/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />        
        <Route path='/checkout' element={<Checkout/>} />        
        <Route path='/product/:id' element={<ProductDetail/>} />
        {/* Admin Routes */}
        <Route path='/admin/dashboard' element={<Dashboard/>} />        
        <Route path='/admin/products' element={<Dashboard/>} />        
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
