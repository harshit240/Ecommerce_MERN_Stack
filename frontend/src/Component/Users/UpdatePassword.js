import React, { useEffect, useState } from 'react'
import { UpdatePasswordAction, clearErrors, loadUser, logoutAction } from '../../Actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import MetaData from '../MetaData';

const UpdatePassword = () => {
    const { error, isUpdated } = useSelector((state) => state.profile)
    const alert = useAlert()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        const myForm = new FormData();
        myForm.append('oldPassword', oldPassword)
        myForm.append('newPassword', newPassword)
        myForm.append('confirmPassword', confirmPassword)
        dispatch(UpdatePasswordAction(myForm))
    }

    const Logout = async () => {
        dispatch(logoutAction());
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
          }
          if (isUpdated) {
            alert.success("Password Changes Successfully, Please do login")
            dispatch(logoutAction());
            navigate("/login");
          }
    }, [dispatch, alert, navigate, isUpdated,error])
    return (
        <>
            <MetaData title={"Update Password"} />
            <div className="container">
                <div className="profilecontainer">
                    <div className="box row">
                        <div className="leftcontainer">
                            <div className="innercontainer">
                                <h4>my orders <i className="fa-duotone fa-angle-right"></i></h4>
                                <h4>Account Settings</h4>
                                <ul>
                                    <li>
                                        <Link to='/profile'>
                                            Profile Information
                                        </Link>
                                    </li>
                                    <li className='active'>Update Password</li>

                                    <li onClick={() => Logout()}>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rightcontainer">
                            <div className="innerrightcontainer">
                                <div className="form-group">
                                    <h3 className='text-center my-3'>Update Password</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            {/* <label htmlFor="oldPassword">Old Password</label> */}
                                            <input type="password" value={oldPassword || ''} name='oldPassword' onChange={(e) => setOldPassword(e.target.value)} className='form-control' id="oldPassword" aria-describedby="nameHelp" placeholder='Enter old Password' />
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="password">New Password</label> */}
                                            <input type={showPassword ? 'text' : 'password'} value={newPassword || ''} name='password' onChange={(e) => setNewPassword(e.target.value)} className='form-control' id="password" aria-describedby="nameHelp" placeholder='Enter New Password' />
                                        </div>
                                        <div className="form-group checkbox">
                                            <input type="checkbox" onClick={toggleShowPassword} /> Show Password
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
                                            <input type="password" value={confirmPassword || ''} name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} className='form-control' id="confirmPassword" aria-describedby="emailHelp" placeholder='Enter Confirm Password' />
                                        </div>
                                        <button type='submit' className='btn saveBtn'>SAVE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatePassword
