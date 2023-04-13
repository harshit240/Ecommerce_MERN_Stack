import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../Constants/ProductConstants.js'
import axios from 'axios'

export const getAllProducts = () => async(dispatch) => {
    try{
        dispatch({ type: ALL_PRODUCT_REQUEST })
        let link = '/api/pn/product'
        const { data } = await axios.get(link)
        // console.log(data)
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: err.response.data.message
        })
    }
}
export const getProductDetails = (id) => async(dispatch) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        // console.log(id);
        let link = `/api/pn/getProductDetail/${id}`
        const  {data}  = await axios.get(link)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: err.response.data.message
        })
    }
}

// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};