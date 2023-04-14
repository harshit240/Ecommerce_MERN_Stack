
import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    UPDATE_PASSWORD_REQUEST,
    LOGOUT_FAIL,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL
} from '../Constants/UserConstants.js'
import axios from 'axios'

export const registerAction = (myForm) => async(dispatch) => {
    try{
        dispatch({ type: REGISTER_USER_REQUEST })
        let link = '/api/pn/register'
        // console.log(myForm)
        const { data } = await axios.post(link,myForm)
        // console.log(data)
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
export const loginAction = (myForm) => async(dispatch) => {
    try{
        dispatch({ type: LOGIN_REQUEST })
        const config = {
            headers: {
              "content-type": "application/json",
            },
          };
        let link = '/api/pn/verifylogin'
        const { data } = await axios.post(link,myForm,config)
        // console.log(data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}
export const loadUser = () => async(dispatch) => {
    try{
        dispatch({ type: LOAD_USER_REQUEST })
        let link = '/api/pn/me'
        const { data } = await axios.get(link)
        // console.log(data)
        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
export const logoutAction = () => async (dispatch) => {
    try {
      await axios.get(`/api/pn/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };
export const UpdatePasswordAction = (myForm) => async(dispatch) => {
    try{
        dispatch({ type: UPDATE_PASSWORD_REQUEST })
        const config = {
            headers: {
              "content-type": "application/json",
            },
          };
        let link = '/api/pn/updatePassword'
        const { data } = await axios.post(link,myForm,config);
        // console.log(data)
        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}
export const updateProfile = (myForm) => async(dispatch) => {
    try{
        dispatch({ type: UPDATE_PROFILE_REQUEST })
        const config = {
            headers: {
              "content-type": "application/json",
            },
          };
        let link = `/api/pn/updateprofile`
        const { data } = await axios.post(link,myForm,config)
        // console.log(data)
        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.result
        })
    }catch(error){
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message
        })
    }
}


// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};