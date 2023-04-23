import axios from 'axios'
import { ADMIN_CATEGORY_FAIL, ADMIN_CATEGORY_REQUEST, ADMIN_CATEGORY_SUCCESS, CLEAR_ERRORS } from '../../Constants/AdminConstants'

export const getAdminCategories = () => async(dispatch) => {
    try{
        dispatch({ type: ADMIN_CATEGORY_REQUEST })
        let link = '/api/pn/categoryproduct'
        const { data } = await axios.get(link)
        console.log(data)
        dispatch({
            type: ADMIN_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: ADMIN_CATEGORY_FAIL,
            payload: err.response.data.message
        })
    }
}

export const createCategory = (fdata) => async(dispatch) => {
    try{
        dispatch({ type: ADMIN_CATEGORY_REQUEST })
        const config = {
            headers: {
              "content-type": "application/json",
            },
          };
        let link = '/api/pn/create/category'
        const { data } = await axios.post(link,fdata)
        // console.log(data)
        dispatch({
            type: ADMIN_CATEGORY_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: ADMIN_CATEGORY_FAIL,
            payload: err.response.data.message
        })
    }
}

// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};