import React,{useEffect, useState} from 'react'
import usersService from './services/usersService';
import SingleUser from './SingleUser';

function Users() {
    //states
    const [jsonUsers,setJsonUsers]=useState({users:[],usersCube:[]})
    const[showUsers,setShowUsers]=useState(false)
    const[userBtn,setUsersBtn]=useState(false)
    

    //console.log(jsonUsers,setJsonUsers,showUsers,setShowUsers)
    //^^^this was to remove errors in order to view ReactDOM in realtime    
    
    const getAllUsers=()=>{
        console.log("we are firing getAllUsers=>>")
        usersService.getUsers().then(gotUsersOk).catch(gotUsersFail);
    }
    //need this useEffect to prevent endless loop in browser
    useEffect(()=>{
        getAllUsers()
    },[])

    const gotUsersOk=(response)=>{
        console.log("We got the peeps=>>>>",response.data);
        const usersArray = response.data;

        setJsonUsers((prevState)=>{
            const people = {...prevState};
            people.users = usersArray;    //plain array
            people.usersCube = usersArray.map(mapUsers)    //manipulating array
            return people;
        })
    }
    const mapUsers = (person)=>{
        console.log("map deez Peeps=>>>>",person);
        return (<SingleUser aPerson={person} key={person.id} onUserLogClick={onLogRequest}/>)
    }
    const gotUsersFail=(err)=>{
        console.error("gotUsersFail Wheres the peeps? OMG=>>>>",err);
    }
    const onClick =(e)=>{
        e.preventDefault();
        console.log("did we show users?=>>>");
        setShowUsers(()=>{
            return !showUsers;
        })
        setUsersBtn(current => !current)
    }
    const onLogRequest=(friendObj)=>{
        console.log(friendObj.id)
    }
  return (
    <React.Fragment>
    <div className="container">
        <div className="d-flex"> </div>
            <div className="text-start">My Users</div>
            {userBtn?<button className='btn btn-warning' onClick={onClick}>
            Hide Users
            </button>
            :
            <button className='btn btn-info' onClick={onClick}>
            Show Users
            </button>}
        </div>
        <br></br>
    <div className="container">
        <div className="row">
        {showUsers? jsonUsers.usersCube:  "give me my Users, please"}
        </div>
    </div>
    </React.Fragment>
  )
}

export default Users