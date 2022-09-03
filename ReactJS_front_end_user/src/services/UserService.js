import axios from 'axios';
// backend code file name  is : spring-boot-backend
const USER_BASE_URL ="http://localhost:8080/users/v1";
class UserService{


    getUsers(){
        return  axios.get(USER_BASE_URL+"/AllUsers");
    }
}

export default new UserService(); // we are expoting object of the class