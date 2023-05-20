import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savShippingInfo } from '../../Actions/CartAction';
import { json, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems)
  const subTotal = cartItems.reduce(
    (acc, val) => acc + val.quantity * val.price,
    0
  )

  const totalPrice = subTotal

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(savShippingInfo({phone,address,city,pincode,country}))
    const data = {
      subTotal,
      totalPrice
    }
    // console.log(data)
    sessionStorage.setItem("orderInfo",JSON.stringify(data))
    navigate('/process/payment');
  }

  return (
    <>
      {/* <!-- Breadcrumb Start --> */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="/">Home</a>
              <a className="breadcrumb-item text-dark" href="/">Shop</a>
              <span className="breadcrumb-item active">Checkout</span>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb End --> */}


      {/* <!-- Checkout Start --> */}
      <form onSubmit={handleSubmit}>
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Billing Address</span></h5>
              <div className="bg-light p-30 mb-5">
                <div className="row">
                  <div className="col-md-6  form-group">
                    <label className='text-dark'>Mobile No</label>
                    <input name='phone' onChange={(e) =>setPhone(e.target.value)} className="form-control" type="text" placeholder="Enter Mobile No." />
                  </div>
                  <div className="col-md-6 form-group">
                    <label className='text-dark'>Address</label>
                    <input name='address' onChange={(e) =>setAddress(e.target.value)} className="form-control" type="text" placeholder="Enter Address" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label className='text-dark'>Country</label>
                    <select name='country' onChange={(e) =>setCountry(e.target.value)} className="custom-select">
                      <option >Select State</option>
                      <option value='us'>United States</option>
                      <option value='ind'>India</option>
                      <option value='afg'>Afghanistan</option>
                      <option value='alb'>Albania</option>
                      <option value='alg'>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label className='text-dark'>City</label>
                    <input name='city' onChange={(e) =>setCity(e.target.value)} className="form-control" type="text" placeholder="Enter your City" />
                  </div>
                  <div className="col-md-6 form-group">
                    <label className='text-dark'>Pin Code</label>
                    <input name='pincode' onChange={(e) =>setPincode(e.target.value)} className="form-control" type="text" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Order Total</span></h5>
              <div className="bg-light p-30 mb-5">
                <div className="border-bottom">
                  <h6 className="mb-3">Products</h6>
                  {
                    cartItems && cartItems.map((value, key) => {
                      return (
                        <div key={key} className="d-flex justify-content-between">
                          <p>{value.name}</p>
                          <p>{parseInt(value.quantity) * parseFloat(value.price)}</p>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="border-bottom pt-3 pb-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Subtotal</h6>
                    <h6>{`₹${subTotal}`}</h6>
                  </div>
                  {/* <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div> */}
                </div>
                <div className="pt-2">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>Total</h5>
                    <h5>{`₹${totalPrice}`}</h5>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Payment</span></h5>
                <div className="bg-light p-30">
                  <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                      <label className="text-dark custom-control-label" htmlFor="paypal">Card</label>
                    </div>
                  </div>
                  {/* <div className="form-group">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                      <label className="text-dark custom-control-label" htmlFor="directcheck">Direct Check</label>
                    </div>
                  </div> */}
                  {/* <div className="form-group mb-4">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                      <label className="text-dark custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                    </div>
                  </div> */}
                  <button type='submit' className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Checkout End --> */}
      </form>
    </>
  )
}

export default Checkout
