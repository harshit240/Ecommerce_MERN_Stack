import React, { useEffect, useRef, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PROFILE_RESET } from '../../Constants/UserConstants';
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, loadUser, logoutAction, updateProfile } from '../../Actions/UserAction';
const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const fData = user?.user
  const { error, isUpdated } = useSelector((state) => state.profile)
  const alert = useAlert();
  const dispatch = useDispatch();
  // const fData = user
  const history = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [number,setNumber] = useState('');
  const [avatar, setAvatar] = useState('')
  const [Avatarpreview, setAvatarpreview] = useState()
  const hide = useRef(false);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault()
    setIsDisabled(!isDisabled);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const myForm = new FormData()
    myForm.append('name', name)
    myForm.append('email', email)
    // myForm.append('number',number)
    myForm.append('avatar', avatar)

    // for (var key of myForm.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }

    dispatch(updateProfile(myForm))
  }
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors)
    }
    if (user) {
      setName(fData?.name);
      setEmail(fData?.email);
      setAvatarpreview(fData?.avatar && fData?.avatar.url)
    }
    if (isUpdated) {
      alert.success("Profile Updated Successfully")
      dispatch(loadUser())
      history("/profile");
      dispatch({
        type: UPDATE_PROFILE_RESET
      })
    }
  }, [dispatch, alert, history, user, isUpdated, error,]);

  const Logout = async () => {
    dispatch(logoutAction());
  }
  return (
    <>
      <div className="container">
        <div className="profilecontainer">
          <div className="box row">
            <div className="leftcontainer">
              <div className="innercontainer">
                <h4>my orders <i className="fa-duotone fa-angle-right"></i></h4>
                <h4>Account Settings</h4>
                <ul>
                  <li className='active'>Profile Information</li>
                  <li>
                    <Link to='/updatePassword'>Update Password
                    </Link> 
                  </li>
                  <li>Forgot Password</li>
                  <li onClick={() => Logout()}>
                    Logout
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightcontainer">
              <div className="innerrightcontainer">
                <div className="form-group">
                  <h3>Personal Information</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group profileimgcontainer">
                      <img src={Avatarpreview} name="avatar" className='form-control profileimg' id="profile" alt='avatar' />
                    </div>
                    <div className='editbtn'>
                      <button className='btn ' onClick={handleToggle}>Edit</button>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputName">Name</label>
                      <input type="text" value={name || ''} name='name' disabled={isDisabled} onChange={(e) => setName(e.target.value)} className='form-control' id="inputName" aria-describedby="nameHelp" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email address</label>
                      <input type="email" value={email || ''} name='email' disabled={isDisabled} onChange={(e) => setEmail(e.target.value)} className='form-control' id="inputEmail" aria-describedby="emailHelp" />
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="inputNumber">Phone Number</label>
                      <input type="number" className='form-control' name="number" id="inputNumber" onChange={(e)=>setNumber(e.target.value)} name="quantity" maxLength="10" pattern="\d{10}"/>                 
                    </div> */}

                    <div className="form-group">
                      <label htmlFor="profile">Profile picture</label>
                      <input type="file" onChange={(e) => setAvatar(e.target.files[0])} disabled={isDisabled} className='form-control' id="profile" />
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

export default Profile
