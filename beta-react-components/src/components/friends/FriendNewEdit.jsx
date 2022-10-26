import React, { useEffect, useState } from "react";
import {useNavigate,Link, useLocation} from "react-router-dom";
import friendService from "../../services/friendService";
import toastr from "toastr";

function FriendNewEdit() {
  let navigate = useNavigate();
  const {state} = useLocation();
  
  const[friendUpdate,setFriendUpdate]=useState(false)
  
  const[friendId,setFriendId]=useState({id:""})
    
  const[friendEdit,setFriendEdit]=useState({
      title:"",
      bio:"",
      summary:"",
      headline:"",
      slug:"",
      statusId:"",
      primaryImage:""
    });
    useEffect(()=>{
      const locationState = state?.payload.id;
      let abortController = new AbortController();
      console.log("useEffect is friending=>>>>");
      
      if (state?.type ==="FRIEND_INFO" && state?.payload) {
        setFriendUpdate(true);
        setFriendEdit((prevState)=>{
          
          return {...prevState,...state.payload}
        })
        
      }
      setFriendId(locationState);
    
    return ()=>{
      abortController.abort();
    }

  },[state])

  const onBackToAmigos=e=>{
    e.preventDefault();
    console.log(onBackToAmigos);
    navigate('/friends')
  }
  const onFriendChange = (e) => {
    const target = e.target;
    const newFriendValue = target.value;
    const idOfField = target.id;
    // console.log({ idOfField, newFriendValue });

    setFriendEdit((prevState) => {
      console.log("updater onChange");

      const newFriendObj = {
        ...prevState,
      };
      //newFriendObj.nameOfField
      newFriendObj[idOfField] = newFriendValue;

      return newFriendObj;
    });

    console.log("end onChange");
  };

  const onFriendSubmit=e=>{
    e.preventDefault();
    console.log("Send that MFer");
    friendService.addFriend(friendEdit).then(onFriendSubOk).catch(onFriendSubError)
    
  }
  const onFriendUpdate=e=>{
    e.preventDefault();
    console.log("Update that punk",state.payload.id);
    friendService.editFriend(friendId,friendEdit).then(onFriendEditOk).catch(onFriendEditError)
    
  }
  const onFriendSubOk=(response)=>{
    console.log("Submited OK=>>",response)
    toastr.options = {
      
      "progressBar": true,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "150",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    toastr["success"]("Geee congrats", "You actually have 1 Amigo?")
    //let friendId = response.data.item;
    //console.log(friendId);
    navigate('/friends')
  }
  const onFriendSubError=(error)=>{
    console.error("Baaaad Submit =>>>",error);
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "250",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    toastr["error"]("Go make some amigos!!!", "You don't have any Amigos")
  }
  
  const onFriendEditError=(error)=>{
    console.error("Baaaad Submit =>>>",error);
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "250",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    toastr["error"]("Go make some amigos!!!", "You don't have any Amigos")
  }
  const onFriendEditOk=(response)=>{
    console.log("Edited OK=>>",response)
    toastr.options = {
      
      "progressBar": true,
      "positionClass": "toast-top-center",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "150",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    toastr["success"]("Geee congrats", "You actually have 1 Amigo?")
    
    navigate('/friends')
  }
  
  return (
    <React.Fragment>
      <>
        <div style={{ textAlign: "center" }}>We do edits here</div>
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-primary"
            id="friends"
            style={{margin:"50px"}}
            onClick={onBackToAmigos}
            data-page="/friends"
            to="/friends"
          >
            Back to Amigos
          </Link>
        </div>
        <br></br>
        <div className="container">
          <div className="row ">
            <div className="form-container col d-flex justify-content-center">
              <form className="col-5">
                <div className="form-group text-center ">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="title"
                    aria-describedby="title"
                    placeholder="Enter your Title"
                    value={friendEdit.title}
                    onChange={onFriendChange}
                  />
                </div>
                <br></br>
                <div className="form-group text-center">
                  <label htmlFor="bio">Bio</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="bio"
                    placeholder="Tell me what ur about"
                    value={friendEdit.bio}
                    onChange={onFriendChange}
                  />
                </div>
                <br></br>

                <div className="form-group text-center">
                  <label htmlFor="summary">Summary</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="summary"
                    aria-describedby="summary"
                    placeholder="Give me a summary"
                    value={friendEdit.summary}
                    onChange={onFriendChange}
                  />
                </div>
                <br></br>
                <div className="form-group text-center">
                  <label htmlFor="headline">Headline</label>
                  <input
                    type="headline"
                    className="form-control text-center"
                    id="headline"
                    placeholder="¿Got headline?"
                    value={friendEdit.headline}
                    onChange={onFriendChange}
                  />
                </div>
                <br></br>

                <div className="form-group text-center">
                  <label htmlFor="slug">Slug</label>
                  <input
                    type="slug"
                    className="form-control text-center"
                    id="slug"
                    placeholder="¿Got Slugs?"
                    value={friendEdit.slug}
                    onChange={onFriendChange}
                  />
                </div>
                <br></br>

                <div className="form-group text-center">
                <label htmlFor="statusId">Gimme da Status</label>
                  <select
                    className="form-select text-center"
                    id="statusId"
                    aria-label="statusId"
                    value={friendEdit.statusId}
                    onChange={onFriendChange}
                  >
                    <option value="" disabled>Choose the Status </option>
                    <option key="NotSet" value="NotSet">NotSet</option>
                    <option key="Active" value="Active">Active</option>
                    <option key="Deleted" value="Deleted">Deleted</option>
                    <option key="Flagged" value="Flagged">Flagged</option>
                  </select>
                </div>
                <br></br>
                <div className="form-group text-center">
                  <label htmlFor="primaryImage">Profile URL</label>
                  <input
                    type="text"
                    className="form-control text-center "
                    id="primaryImage"
                    aria-describedby="primaryImage"
                    placeholder="Provide a URL to an image"
                    value={friendEdit.primaryImage}
                    onChange={onFriendChange}
                  />
                </div>
                <br></br>
                <div className="d-flex justify-content-center">
              {friendUpdate ? 
                 <button
                    type="submit"
                    className="btn btn-success "
                    onClick={onFriendUpdate}
                  >
                    Update Amigo
                  </button>
                  :
                  <button
                    type="submit"
                    className="btn btn-primary "
                    onClick={onFriendSubmit}
                  >
                    Add Amigo
                  </button>
              }
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
}

export default FriendNewEdit;
