import axios from 'axios';
import {setAuthorization} from '../helpers/auth_header';

export function login(user)
{
    return axios.post('/api/login', user)
    .then(response => {
        if (response.status === 200)
        {
        	setAuthorization(response.data.access_token);
        	return response.data;
        }
    });
}

export function logout()
{
    return axios.get('/api/logout')
    .then(response => {
        if (response.status === 200)
        {
        	return response.data;
        }
    });
}