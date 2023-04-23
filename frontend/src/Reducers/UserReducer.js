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
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
} from '../Constants/UserConstants.js'

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuntheticated: false,
            }
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuntheticated: true,
                user: action.payload.user,
            }
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuntheticated: false
            }
        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
}

export const profileReducer = (state = { profile: {} }, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case UPDATE_PASSWORD_REQUEST:
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            };

        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                isUpdated: false,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};  