import React,{ useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, registerAction } from '../../Actions/UserAction';
import { useAlert } from 'react-alert'
import Loading from '../Layout/Loading';
import MetaData from '../MetaData';
function Registration() {
    const navigate = useNavigate();
    const alert = useAlert();
    
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.auth);
    const {isAuntheticated,error,loading} = data
    // console.log(isAuntheticated)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [avatar, setAvatar] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(name,email,password,confirm_password)
        const myForm = new FormData()
        // console.log(myForm);
        myForm.append('name',name)
        myForm.append('email',email)
        myForm.append('password',password)
        myForm.append('confirm_password',confirm_password)
        myForm.append('avatar',avatar)
        dispatch(registerAction(myForm))
        setName('')
        setEmail('')
        setPassword('')
        setConfirm_password('')
        setAvatar('')
    }
    useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
        if(isAuntheticated){
            console.log("Hiii")
            navigate('/login')
            const message =  data.user.message;
            alert.success(message)
        }
    },[error,alert,dispatch,isAuntheticated,navigate])
    return (
        <>
        {
            loading ? (
                <Loading/>
            ): (
                <>
                    <MetaData title = {'Registration'}/>
                    <section>
                <div className='container'>
                    <div className='row'>
                    <div className='col-lg-8'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputName1">Name</label>
                                <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputName1" placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ConfirmPassword1">Confirm Password</label>
                                <input type="password" value={confirm_password} name="confirm_password" onChange={(e)=>setConfirm_password(e.target.value)} className="form-control" id="ConfirmPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Profile image</label>
                                <input type="file" name="avatar" onChange={(e)=>setAvatar(e.target.files[0])} className="form-control" id="image"/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
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

export default Registration
