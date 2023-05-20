import './App.css';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import ProductDetail from './Component/Product/ProductDetail';
import Registration from './Component/Users/Registration';
import Login from './Component/Users/Login';
import { useEffect, useState } from 'react';
import { loadUser } from './Actions/UserAction';
import { useDispatch } from 'react-redux';
import Profile from './Component/Users/Profile';
import Cart from './Component/Layout/Cart';
import UpdatePassword from './Component/Users/UpdatePassword';
import Checkout from './Component/Checkout/Checkout';
import Dashboard from './Component/Admin/Dashboard';
import CreateProduct from './Component/Admin/CreateProduct';
import Category from './Component/Admin/Category';
import CreateCategory from './Component/Admin/CreateCategory';
import AllUser from './Component/Admin/AllUser';
import NoPageFound from './Component/Layout/NoPageFound';
import axios from 'axios';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Success from './Payment/Success';
import Order from './Component/Users/Order';
function App() {
  //payment apikey get
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/pn/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  // console.log(stripeApiKey)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser())
    getStripeApiKey()
  }, [dispatch])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/updatePassword' element={<UpdatePassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          {/* Admin Routes */}
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/products' element={<Dashboard />} />
          <Route path='/admin/category' element={<Category />} />
          <Route path='/admin/create/product' element={<CreateProduct />} />
          <Route path='/admin/create/category' element={<CreateCategory />} />
          <Route path='/all/users' element={<AllUser />} />
          <Route path="*" element={<NoPageFound />} />
          {stripeApiKey && (
            <Route path="/process/payment" element={
              
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>} />
          )}
          <Route path='/orders/me' element={<Order />} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
