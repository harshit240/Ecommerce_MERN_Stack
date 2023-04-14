import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, loginAction } from '../../Actions/UserAction';
import Loading from '../Layout/Loading'
import MetaData from '../MetaData';
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();
    const data = useSelector((state) => state.auth);
    const { isAuntheticated, error, loading } = data
    // console.log(isAuntheticated, error, loading)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData()
        myForm.append('email', email)
        myForm.append('password', password)
        dispatch(loginAction(myForm))
        setEmail('')
        setPassword('')
    }


    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isAuntheticated) {
            navigate('/')
            // const message = data.user.message;
            // alert.success(message)
        }
    }, [error, alert, dispatch, isAuntheticated, navigate])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <MetaData title={'Login'} />
                    <section>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-8 form'>
                                    <form onSubmit={submitHandler}>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </form>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-offer mb-30" style={{ height: "200px" }}>
                                        <img className="img-fluid" src="img/offer-1.jpg" alt="" />
                                        <div className="offer-text">
                                            <h6 className="text-white text-uppercase">Save 20%</h6>
                                            <h3 className="text-white mb-3">Special Offer</h3>
                                            <Link href="/" className="btn btn-primary">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-offer mb-30" style={{ height: "200px" }}>
                                        <img className="img-fluid" src="img/offer-2.jpg" alt="" />
                                        <div className="offer-text">
                                            <h6 className="text-white text-uppercase">Save 20%</h6>
                                            <h3 className="text-white mb-3">Special Offer</h3>
                                            <Link href="/" className="btn btn-primary">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )

            }

        </>
    )
}

export default Login
