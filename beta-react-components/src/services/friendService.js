import axios from "axios";
import * as helper from "./serviceHelper"

const friendApi = {
    endpoint: "https://api.remotebootcamp.dev/api/friends"
    //endpoint: "https://localhost:50001/api/v3/friends"
}

const getFriends = (pageIndex,pageSize)=>{
    const config={
        method: "GET",
        url: `${friendApi.endpoint}/paginate/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: {"Content-type":"applications/json"}
    }
    return axios(config).then(helper.onGlobalSuccess);
}
const myFriend = (id)=>{
    const config={
        method: "GET",
        url: `${friendApi.endpoint}/${id}`,
        withCredentials: true,
        crossdomain:true,
    }
    return axios(config);
}
const deleteFriend = (friendId)=>{
    const config={
        method: "DELETE",
        url: `${friendApi.endpoint}/${friendId}`,
        withCredentials: true,
        crossdomain: true,
        //headers: {"Content-type":"applications/json"}
    }
    return axios(config).then(()=>{return friendId}).catch();
}
const addFriend =(payload)=>{
    const config={
        method: "POST",
        url:`${friendApi.endpoint}`,
        withCredentials:true,
        data: payload,
        crossdomain: true,
        //headers: {"Content-type":"applications/json"}
    }
    return axios(config)
}
const editFriend =(id,payload)=>{
    const config={
        method: "PUT",
        url:`${friendApi.endpoint}/${id}`,
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
        url: `${friendApi.endpoint}/search/?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}%`,
        withCredentials:true,
        crossdomain:true,
        headers: {"Content-type":"applications/json"}
    }
    return axios(config)
}

const friendService = {deleteFriend,getFriends,addFriend,editFriend,myFriend,searchFriend}
export default friendService;    