import axios from 'axios'
import { CLEAR_ERRORS,ALL_USER_REQUEST, ALL_USER_SUCCESS, } from '../../Constants/AdminConstants'

export const getUsers = () => async(dispatch) => {
    try{
        dispatch({ type: ALL_USER_REQUEST })
        let link = '/api/pn/getuserdata'
        const { data } = await axios.get(link)
        // console.log(data)
        dispatch({
            type: ALL_USER_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: CLEAR_ERRORS,
            payload: err.response.data.message
        })
    }
}