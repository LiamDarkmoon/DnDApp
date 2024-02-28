import axios from 'axios';
import { json } from 'react-router-dom';

//axios config
export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        timeout: 6000
    }
)