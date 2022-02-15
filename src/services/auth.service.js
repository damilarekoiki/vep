import axios from 'axios';
const API_URL = 'https://ves-backend.herokuapp.com/api/user';
class AuthService {
  register(user) {
    return axios.post(`${API_URL}/register`, user);
  }
  login(user) {
    console.log({user});
    return axios
      .post(`${API_URL}/login`, user)
      .then(response => {
        if (response?.data?.data?.token) {
          localStorage.setItem('user', JSON.stringify(response?.data?.data));
        }
        return response?.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
}
export default new AuthService();