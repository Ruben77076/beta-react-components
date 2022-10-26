import axios from "axios";

const testAPI = {
    endpoint: "https://jsonplaceholder.typicode.com/posts"
}
const addComment =(payload)=>{
    const config={
        method: "POST",
        url:`${testAPI.endpoint}`,
        withCredentials:true,
        data: payload,
        crossdomain: true,
        headers: {"Content-type":"applications/json"}
    }
    return axios(config)
}

const commentService = {addComment}
export default commentService;