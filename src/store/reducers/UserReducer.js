import { API_CALL_FAIL, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

const initialState = {
    fetching: false,
    token: null,
    error: null,
    loged: false
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                token: null,
                error: null,
                loged: false

            }

        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                token: action.payload.token,
                error: null,
                loged: true

            }
    
        case API_CALL_FAIL:
            return {
                ...state,
                fetching: false,
                token: null,
                error: action.paylod.error,
                loged: false

            }
    
        default:
            return state;
    }
}