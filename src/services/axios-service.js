import axiosConfig  from "../utils/config/axios-config";




export function getRandomUser() {
    return axiosConfig.get('/');
}
