import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {

    return axios.post('/api/login', { email: userEmail, password: userPassword }); //those keys are from backend
}

export { handleLoginApi }
