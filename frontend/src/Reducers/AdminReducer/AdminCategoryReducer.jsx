import { ADMIN_CATEGORY_REQUEST,ADMIN_CATEGORY_SUCCESS,ADMIN_CATEGORY_FAIL,CREATE_CATEGORY_REQUEST,CREATE_CATEGORY_SUCCESS,CREATE_CATEGORY_FAIL,CLEAR_ERRORS } from "../../Constants/AdminConstants"

export const adminCategoriesReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ADMIN_CATEGORY_REQUEST:
        case CREATE_CATEGORY_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ADMIN_CATEGORY_SUCCESS:
        case CREATE_CATEGORY_SUCCESS:
            return {
                loading: false,
                products: action.payload.getCategory,
            }
        case ADMIN_CATEGORY_FAIL:
        case CREATE_CATEGORY_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
}