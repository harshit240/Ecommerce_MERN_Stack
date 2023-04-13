import {
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '../Constants/ProductConstants.js'

export const categoryReducer = (state = {products:[]},action) =>{
    switch (action.type) {
        case CATEGORY_DETAILS_REQUEST:
            return{
                loading:true,
                products:[]
            }
        case CATEGORY_DETAILS_SUCCESS:
            return{
                loading:false,
                products:action.payload.getCategory,
            }
        case CATEGORY_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null,
            }
    
        default:
            return state;
    }
}