import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAction } from '../../Actions/UserAction'
function Header() {
    const { user, loading } = useSelector((state) => state.auth)
    // console.log(user)
    const { products } = useSelector((state) => state.c)
    const { cartItems } = useSelector((state) => state.cart)
    // console.log(cartItems.length)
    // const user = user?.user
    const dispatch = useDispatch();
    const Logout = async () => {
        dispatch(logoutAction());
    }
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <Link className="text-body mr-3" to={''}>About</Link>
                            <Link className="text-body mr-3" to={''}>Contact</Link>
                            <Link className="text-body mr-3" to={''}>Help</Link>
                            <Link className="text-body mr-3" to={''}>FAQs</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            {
                                user ? (
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                                        <div className="dropdown-menu dropdown-menu-right text-center">
                                            <span className='text-uppercase'>{user && user?.name}</span>
                                            <img style={{ height: "30px", width: "30px", borderRadius: "100%" }} src={user?.avatar && user?.avatar.url} alt='userImage' />
                                            {
                                                user && user.role !== 'admin' ? (
                                                    <Link to={'/orders/me'} className="dropdown-item" >Orders</Link>
                                                ) : (
                                                    <Link to={'/admin/dashboard'} className="dropdown-item" >Dashboard</Link>
                                                )
                                            }
                                            <Link to='/profile' className="dropdown-item" >Profile</Link>
                                            <Link to={'/register'} className="dropdown-item" >Registration</Link>
                                            <button className="dropdown-item" type="button" onClick={() => Logout()}>Logout</button>
                                        </div>
                                    </div>
                                ) : (!loading && <Link className='dropdown-item' to='/login'>Log In</Link>
                                )
                            }
                            <Link className='dropdown-item' to='/register'>Register</Link>
                            <div className="btn-group mx-2">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">EUR</button>
                                    <button className="dropdown-item" type="button">GBP</button>
                                    <button className="dropdown-item" type="button">CAD</button>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">FR</button>
                                    <button className="dropdown-item" type="button">AR</button>
                                    <button className="dropdown-item" type="button">RU</button>
                                </div>
                            </div>
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <Link to={''} className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>{cartItems.length}</span>
                            </Link>
                            <Link to={'/cart'} className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>{cartItems.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Link to={''} className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">your</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", padding: "0 30px" }}>
                            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </Link>
                        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: "calc(100% - 30px)", zIndex: "999" }}>
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown dropright">
                                    <Link to={''} className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></Link>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <Link to={''} className="dropdown-item">Men's Dresses</Link>
                                        <Link to={''} className="dropdown-item">Women's Dresses</Link>
                                        <Link to={''} className="dropdown-item">Baby's Dresses</Link>
                                    </div>
                                </div>
                                <Link to={''} className="nav-item nav-link">Shirts</Link>
                                <Link to={''} className="nav-item nav-link">Jeans</Link>
                                <Link to={''} className="nav-item nav-link">Swimwear</Link>
                                <Link to={''} className="nav-item nav-link">Sleepwear</Link>
                                <Link to={''} className="nav-item nav-link">Sportswear</Link>
                                <Link to={''} className="nav-item nav-link">Jumpsuits</Link>
                                <Link to={''} className="nav-item nav-link">Blazers</Link>
                                <Link to={''} className="nav-item nav-link">Jackets</Link>
                                <Link to={''} className="nav-item nav-link">Shoes</Link>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <Link to={''} className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                            </Link>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link href="index.html" className="nav-item nav-link active">Home</Link>
                                    <Link href="shop.html" className="nav-item nav-link">Shop</Link>
                                    <Link href="detail.html" className="nav-item nav-link">Shop Detail</Link>
                                    <div className="nav-item dropdown">
                                        <Link to={''} className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></Link>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <Link href="cart.html" className="dropdown-item">Shopping Cart</Link>
                                            <Link href="checkout.html" className="dropdown-item">Checkout</Link>
                                        </div>
                                    </div>
                                    <Link href="contact.html" className="nav-item nav-link">Contact</Link>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <Link to={''} className="btn px-0">
                                        <i className="fas fa-heart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: "2px" }}>{cartItems.length}</span>
                                    </Link>
                                    <Link to={'/cart'} className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary"></i>
                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: "2px" }}>{cartItems.length}</span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-5">
                                <i className="fas fa-envelope prefix grey-text"></i>
                                <input type="email" id="defaultForm-email" className="form-control validate" />
                                <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                            </div>
                            <div className="md-form mb-4">
                                <i className="fas fa-lock prefix grey-text"></i>
                                <input type="password" id="defaultForm-pass" className="form-control validate" />
                                <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                            </div>

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-default">Login</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="text-center">
                <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm" >Launch
                Modal Login Form</a>
            </div> */}
        </>
    )
}

export default Header
