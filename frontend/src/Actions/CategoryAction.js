
import {
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../Constants/ProductConstants.js'
import axios from 'axios'

export const getCategoryProducts = () => async(dispatch) => {
    try{
        dispatch({ type: CATEGORY_DETAILS_REQUEST })
        let link = '/api/pn/categoryproduct'
        const { data } = await axios.get(link)
        // console.log(data)
        dispatch({
            type: CATEGORY_DETAILS_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: CATEGORY_DETAILS_FAIL,
            payload: err.response.data.message
        })
    }
}

// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};