import axios from 'axios';

const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: `http://localhost:3000`
    })
}

export default axiosWithAuth;