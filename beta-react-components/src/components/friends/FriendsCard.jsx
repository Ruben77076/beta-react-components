import React from "react";
//import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
//import FriendNewEdit from './FriendNewEdit';

function FriendsCard(props) {
  const navigate = useNavigate();
  console.log("props", props);
  const friend = props.aFriend;
  const friendImage = friend.primaryImage.url;
  const migoImage = {primaryImage:friend.primaryImage.url}
  
  const onLocalFriendDleetClick = (e) => {
    e.preventDefault();
    props.onFriendDleetClick(props.aFriend, e);
  };
  
  const onLocalFriendEditClick = (e) => {
    e.preventDefault();
    props.onFriendEditClick(friend, e);
    const migo = {...friend,...migoImage}
     navigateToFriendEdit(migo);
  };
  
  const navigateToFriendEdit = (migo) => {
    const stateForTransport = {type:"FRIEND_INFO",payload: migo};
    navigate(`/friends/${friend.id}`,{state:stateForTransport});
    };
  
  return (
    <React.Fragment>
      <div className="col-3" key={props.aFriend.id}>
        <div 
        className="card shadow border border-secondary rounded mb-1"
        >
          <img
            src={friendImage}
            className="card-img-top img-responsive"
            alt="...friend"
            style={{ width: "100%", height: "275px" }}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{friend.title}</h5>
            <p className="card-text text-center">{friend.bio}</p>
            <div className="d-flex justify-content-center">
              <button
                className="link-btn btn btn-primary"
                type="link"
                id="friendnewedit"
                onClick={onLocalFriendEditClick}
                to="/friends/new"
                data-page="/friends/new"
              >
                Don't Edit Me
              </button>
              &nbsp;
              <button
                className="link-btn btn btn-danger"
                onClick={onLocalFriendDleetClick}
              >
                Dleet Me
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default React.memo(FriendsCard);
