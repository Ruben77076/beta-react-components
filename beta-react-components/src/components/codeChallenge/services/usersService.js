import axios from "axios";

const jsonAPI = {
    endpoint: "https://jsonplaceholder.typicode.com/users"
}

const getUsers =()=>{
    const config = {
        method: "GET",
        url: jsonAPI.endpoint,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type":"application/json"}
    }
    return axios(config);
}

const usersService = {getUsers}

export default usersService;