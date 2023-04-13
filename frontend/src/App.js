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
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />        
        <Route path='/product/:id' element={<ProductDetail/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
