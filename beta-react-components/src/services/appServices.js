import axios from "axios";

const loginService ={
    endpoint: "https://api.remotebootcamp.dev/api/users/login"
};
const registerService ={
    endpoint: "https://api.remotebootcamp.dev/api/users/register"
};
const userService ={
    endpoint: "https://api.remotebootcamp.dev/api/users"
};

const getCurrentUser = () => {
    const config = {
        method: "GET",
        url: `${userService.endpoint}/current`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type" : "application/json"}
    };
    return axios(config);
}

const getUserInfo =(id)=>{
    const config ={
        method: "GET",
        url: `${userService.endpoint}/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-Type":"application/json"}
    };
    return axios(config);
}

const userLogin =(payload)=>{
    const config = {
        method: "POST",
        url: loginService.endpoint,
        withCredentials: true,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
    
      return axios(config);
};
const userRegister =(payload)=>{
    const config = {
        method: "POST",
        url: registerService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    
    return axios(config);
};
const userLogout =()=>{
    const config = {
        method: "GET",
        url: `${userService.endpoint}/logout`,
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
    
      return axios(config);
};

const appServices = {userLogin,userRegister,getUserInfo, getCurrentUser,userLogout}

export default appServices;