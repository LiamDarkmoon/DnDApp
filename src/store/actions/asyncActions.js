export const API_CALL_REQUEST = 'API_CALL_REQUEST';

export const API_CALL_FAIL = 'API_CALL_FAIL'; 

export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';

export const login = (email, password) => {
    
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: 'post',
                url:('https://reqres.in/api/login'),
                data: {
                    email: email,
                    password: password
                },
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAIL
        }
    }
}


/**
 * 
 */
export const httpsRequest = (method, url, data) => {

    return {
        
        type: API_CALL_REQUEST,
        payload: {

            request: {
                method: method,
                url: url,
                data: data,
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAIL,
            error: 'fuckyou'
        }
    }
}       