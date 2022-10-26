import axios from "axios";
import * as helper from "./serviceHelper"

const jobsApi = {
    endpoint: "https://api.remotebootcamp.dev/api/jobs"
}
const techCompanyApi = {
    endpoint: "https://api.remotebootcamp.dev/api/techcompanies"
}

const getJobs = (pageIndex,pageSize)=>{
    const config={
        method: "GET",
        url: `${jobsApi.endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-type":"applications/json"}
    }
    return axios(config).then(helper.onGlobalSuccess);
}
const addJob =(payload)=>{
    const config={
        method: "POST",
        url:`${jobsApi.endpoint}`,
        withCredentials:true,
        data: payload,
        crossdomain: true,
        //headers: {"Content-type":"applications/json"}
    }
    return axios(config)
}
const myFriend = (id)=>{
    const config={
        method: "GET",
        url: `${jobsApi.endpoint}/${id}`,
        withCredentials: true,
        crossdomain:true,
    }
    return axios(config);
}
const deleteFriend = (friendId)=>{
    const config={
        method: "DELETE",
        url: `${jobsApi.endpoint}/${friendId}`,
        withCredentials: true,
        crossdomain: true,
        //headers: {"Content-type":"applications/json"}
    }
    return axios(config).then(()=>{return friendId}).catch();
}
const editFriend =(id,payload)=>{
    const config={
        method: "PUT",
        url:`${jobsApi.endpoint}/${id}`,
        withCredentials:true,
        data: payload,
        crossdomain: true,
        //headers: {"Content-type":"applications/json"}
    }
    return axios(config)
}
const searchFriend = (pageIndex,pageSize,query)=>{
    const config={
        method: "GET",
        url: `${jobsApi.endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${query}`,
        withCredentials:true,
        crossdomain:true,
        headers: {"Content-type":"applications/json"}
    }
    return axios(config)
}
const getTechCompanies = (pageIndex,pageSize)=>{
    const config={
        method: "GET",
        url: `${techCompanyApi.endpoint}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-type":"applications/json"}
    }
    return axios(config).then(helper.onGlobalSuccess);
}

const jobService = {deleteFriend,getJobs,addJob,editFriend,myFriend,searchFriend,getTechCompanies}
export default jobService;    