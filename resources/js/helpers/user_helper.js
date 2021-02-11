import axios from 'axios';

export function getUsers()
{
    return axios.get('/api/user')
    .then(response => {
        if (response.status === 200)
        {
        	return response.data;
        }
    });
}