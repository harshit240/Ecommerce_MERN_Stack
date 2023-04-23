import axios from "axios"
import { ADMIN_PRODUCT_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, CLEAR_ERRORS, CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS } from "../../Constants/AdminConstants"

export const getProducts = () => async(dispatch) => {
    try{
        dispatch({ type: ADMIN_PRODUCT_REQUEST })
        let link = '/api/pn/product'
        const { data } = await axios.get(link)
        // console.log(data)
        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: err.response.data.message
        })
    }
}

export const createProduct = (pdata) => async(dispatch) => {
    try{
        dispatch({ type: CREATE_PRODUCT_REQUEST })
        const config = {
            headers: {
              "content-type": "application/json",
            },
          };
        let link = '/api/pn/product/create';
        const { data } = await axios.post(link,pdata)
        console.log(data)
        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload: err.response.data.message
        })
    }
}


// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};