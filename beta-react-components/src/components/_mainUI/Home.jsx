import React, { useEffect } from 'react'
//import { Route} from 'react-router-dom';
import appServices from '../../services/appServices';


function Home(props) {
  
 
  const currentUser = props.daUser;
  console.log(currentUser);
  useEffect(()=>{
    const homeUserFail=(err)=>{
      console.error("homeUserFail=>>>",err);
    }
    const homeUserOk=(response)=>{
      console.log("homeUserOK=>>>>",response);
    }  
    appServices.getCurrentUser().then(homeUserOk).catch(homeUserFail)
    // const timeOut = setTimeout(() => {
    //   window.location.reload();
    // }, 500000);
    // return () => {
    //   // clears timeout before running the new effect
    //   clearTimeout(timeOut);
    // };
    },[currentUser]);
    

  
  
  return (
    <React.Fragment>
      <br></br>
        <div style={{textAlign:"center"}}>
          <h3>
          ¡ Migo.co !
          </h3>
          <h4>Welcome, &nbsp;&nbsp; {currentUser.firstName} {currentUser.lastName}</h4>
          </div>
    </React.Fragment>
  )
}

export default Home