import axios from 'axios';

class UserService { 
  getUser(payload) { 
    return axios.get(`https://api.github.com/users/${payload}`); 
  } 
}

export default new UserService();