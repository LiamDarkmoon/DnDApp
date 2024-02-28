import { type } from "@testing-library/user-event/dist/type";
import { async } from "rxjs";

export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log(response);
    console.log(response.status);
    console.log(response.ok);

    return response.json()
}

export const getAllPagedUsers = async (page) => {
    let response = await fetch('https://reqres.in/api/users?page=' + page);
    console.log(response);
    console.log(response.status);
    console.log(response.ok);

    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch('https://reqres.in/api/users/'+ id);
    console.log(response);
    console.log(response.status);
    console.log(response.ok);

    return response.json()
}


export const login = async (email, password) => {

    let body = {
        email: email,
        password: password
    }

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        mode:'no-cors',
        credentials:'omit',
        cache: 'no-cache',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(body),


    });

    console.log(response);
    console.log(response.status);
    console.log(response.ok);

    return response.json();
}