import React,{useEffect} from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import appServices from "../../services/appServices";
import toastr from "toastr";
import logo from '/RJ.Github/beta-react-components/beta-react-components/src/images/logo-yellow.png'
//import {Route} from "react-router-dom";
// import Home from './Home';

function SiteNav(props) {
  let navigate = useNavigate();
  let {state}=useLocation();
  
  const thisGuy = props.daUser;
  //const isLogin=props.logBtn;
  //const [logButton, setLogButton] = useState(false);
  useEffect(() => {
    appServices.getCurrentUser().then(navUserOk).catch(navUserFail)
  }, [state]);
  
  const onLogoutClick = (e) => {
    e.preventDefault();
    appServices.userLogout().then(logoutOk).catch(logoutFail);
  };
  const navUserOk=(response)=>{
    console.log("navUserOk=>>>>",response);
  }
  const navUserFail=(err)=>{
    console.error("navUserFail=>>>>",err);
  }
  const logoutOk = (bye) => {
    console.log("Goodbye", bye);
    //setLogButton(false);
    const stateForTransport = {
      type: "USER_LOGOUT",
      payload: {
        firstName: "Unknown",
        lastName: "Migo",
        isLoggedIn: false,
      },
    };
    toastr.success("UR OUTTA THEREEEEE")
    navigate("/", { state: stateForTransport });
  };
  
  const logoutFail = (err) => {
    console.log("I'm tryna leave??=>>>", err);
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sabio"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/home"
                  id="goHome"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/friends"
                >
                  Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button "
                  to="/jobs"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/techcompanies"
                >
                  Tech Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/events"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-2 text-white link-button"
                  to="/testajax"
                >
                  Test and Ajax Call
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <Link
                to="/home"
                className="d-inline-block align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
              >
                {thisGuy.firstName} {thisGuy.lastName}
              </Link>
              {thisGuy.isLoggedIn ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onLogoutClick}
                >
                  Logout
                </button>
              ) : (
                <Link type="button" className="btn btn-success" to="/login">
                  Login
                </Link>
              )}{" "}
              <Link type="button" className="btn btn-info" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default SiteNav;
