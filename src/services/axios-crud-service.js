import axios from 'axios';



/**
 * 
 * @param {string} email 
 * @param {string} password
 * 
 * login method to reqres Endpoint 
 */
export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    return axios.post('https://reqres.in/api/login', body)
}

// TODO obtain all users
export const getAllUsers = () => {
    
    return axios.get('https://reqres.in/api/users')
}

// TODO obtain all paged users
export const getAllPagedUsers = (page) => {
    
    return axios.get('https://reqres.in/api/users?page=' + page)
}

// TODO obtain users by id
export const getUserById = (id) => {
    
    return axios.get('https://reqres.in/api/users' + id)
}

// TODO create user}
export const createUser = (name, job) =>{

    let body = {
        name: name,
        job: job
    }

    return axios.post('https://reqres.in/api/users', body)
}

// TODO UPDATE user
export const updateUser = (id, name, job) =>{

    let body = {
        id: id,
        name: name,
        job: job
    }

    return axios.put('https://reqres.in/api/users', body)
}

// TODO DELETE user
export const deleteUserById = (id) => {
    
    return axios.delete('https://reqres.in/api/users' + id)
}
