import axios from 'axios';

class UserService { 
  getUser(payload) { 
    return axios.get(`https://api.github.com/users/${payload}`); 
  } 
  getUserRepos(payload) { 
    return axios.get(`https://api.github.com/users/${payload}/repos`); 
  } 
}

export default new UserService();