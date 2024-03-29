import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemsToCart, removeFromCart } from '../../Actions/CartAction'
import { Link, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart)
    const { isAuntheticated } = useSelector((state) => state.auth)
    // console.log(cartItems)
    const alert = useAlert();
    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };
    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };
    const checkOutHandler = () =>{
        if(isAuntheticated){
            navigate('/checkout')
        }else{
            navigate('/login')
            alert.success('Do Login First')
        }
    }
    const removeItem = (id) =>{
        dispatch(removeFromCart(id))
    }
    
    return (
        <>
            {
                cartItems.length === 0 ? (
                    <h2 className='m-5 text-center'>Your cart is Empty!</h2>
                ) : (
                    <>
                        <div className="container-fluid">
                            <div className="row px-xl-5">
                                <div className="col-lg-8 table-responsive mb-5">
                                    <table className="table table-light table-borderless table-hover text-center mb-0">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Products</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                cartItems && cartItems.map((val, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className="align-middle" ><img src={val.image} alt="" style={{ width: "50px" }} />{val.name}</td>
                                                            <td className="align-middle">{val.price}</td>
                                                            <td className="align-middle">
                                                                <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                                    <div className="input-group-btn">
                                                                        <button className="btn btn-sm btn-primary btn-minus" onClick={() => decreaseQuantity(val.product, val.quantity, val.stock)}>
                                                                            <i className="fa fa-minus"></i>
                                                                        </button>
                                                                    </div>
                                                                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center"  value={val.quantity}  />
                                                                    <div className="input-group-btn">
                                                                        <button className="btn btn-sm btn-primary btn-plus" onClick={() => increaseQuantity(val.product, val.quantity, val.stock)}>
                                                                            <i className="fa fa-plus"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle">{parseInt(val.quantity) * parseFloat(val.price)}</td>
                                                            <td className="align-middle"><button className="btn btn-sm btn-danger" onClick={() => removeItem(val.product)}><i className="fa fa-times"></i></button></td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-4">
                                    <form className="mb-30" action="">
                                        <div className="input-group">
                                            <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary">Apply Coupon</button>
                                            </div>
                                        </div>
                                    </form>
                                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                                    <div className="bg-light p-30 mb-5">
                                        <div className="border-bottom pb-2">
                                            <div className="d-flex justify-content-between mb-3">
                                                <h6>Order Summary</h6>
                                                <h6>{cartItems.reduce((acc, itm) => (acc + Number(itm.quantity)), 0)} (Units)</h6>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="font-weight-medium">Shipping</h6>
                                                <h6 className="font-weight-medium">{`₹${cartItems.reduce(
                                                    (acc, val) => acc + val.quantity * val.price,
                                                    0
                                                )}`}</h6>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="d-flex justify-content-between mt-2">
                                                <h5>Total</h5>
                                                <h5>{`₹${cartItems.reduce(
                                                    (acc, val) => acc + val.quantity * val.price,
                                                    0
                                                )}`}</h5>
                                            </div>
                                            <button onClick={()=>checkOutHandler()} className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Cart
