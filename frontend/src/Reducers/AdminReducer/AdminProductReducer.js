import { ADMIN_PRODUCT_FAIL, ADMIN_PRODUCT_REQUEST, ADMIN_PRODUCT_SUCCESS, CLEAR_ERRORS } from "../../Constants/AdminConstants"

export const AdminProductReducer = (state = {products:[]},action) =>{
    switch (action.type) {
        case ADMIN_PRODUCT_REQUEST:
            return{
                loading:true,
                products:[]
            }
        case ADMIN_PRODUCT_SUCCESS:
            return{
                loading:false,
                products:action.payload.allProducts,
            }
        case ADMIN_PRODUCT_FAIL:
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