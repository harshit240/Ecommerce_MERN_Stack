
import { CLEAR_ERRORS,ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL, } from '../../Constants/AdminConstants'


export const getAllUser = (state = {users:[]},action) =>{
    switch (action.type) {
        case ALL_USER_REQUEST:
            return{
                loading:true,
                users:[]
            }
        case ALL_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload.getUser,
            }
        case ALL_USER_FAIL:
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
