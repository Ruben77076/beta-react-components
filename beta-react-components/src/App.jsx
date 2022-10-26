import React, { useEffect, useState } from "react";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

//my F(x) comps
import SiteNav from "./components/_mainUI/SiteNav";
import Home from "./components/_mainUI/Home";
import Friends from "./components/friends/Friends";
import Jobs from "./components/jobs/Jobs";
import TechCompanies from "./components/_mainUI/TechCompanies";
import Events from "./components/_mainUI/Events";
import TestAjax from "./components/_mainUI/TestAjax";
import Login from "./components/_mainUI/Login";
import Register from "./components/_mainUI/Register";
import FriendNewEdit from "./components/friends/FriendNewEdit";
import appServices from "./services/appServices";
import JobNewEdit from "./components/jobs/JobNewEdit";



function App() {
  const { state } = useLocation();

  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
    isLoggedIn: false,
  });

  useEffect(() => {
    const onGetCurrentUserSuccess = (response) => {
      console.log("onGetCurrentUserSuccess", response.data.item.id);
      const userId = response.data.item.id;
      appServices
        .getUserInfo(userId)
        .then(getUserInfoSuccess)
        .catch(getUserInfoError);
    };

    appServices
      .getCurrentUser()
      .then(onGetCurrentUserSuccess)
      .catch(onGetCurrentUserError);

    const getUserInfoSuccess = (response) => {
      console.log("USER INFO =>", response);
      
      let gotUser = response.data.item;
      let gotLogin = response.data.isSuccessful;

      setCurrentUser((prevState) => {
        let nowUser = { ...prevState };
        nowUser.firstName = gotUser.firstName;
        nowUser.lastName = gotUser.lastName;
        nowUser.isLoggedIn = gotLogin;

        return nowUser;
      });
    };
    if (state?.payload && state?.type === "USER_LOGOUT") {
      setCurrentUser(() => {
        const pd = { ...state.payload };
        return pd;
      });
    }
    // const timer = setTimeout(() => {
    //   window.location.reload();
    // }, 50000);
    // return () => clearTimeout(timer);
  }, [state]);

  const getUserInfoError = (error) => {
    console.error("GET USER INFO ERROR", error);
  };

  const onGetCurrentUserError = (error) => {
    console.error("onGetCurrentUserError", error);
  };
  return (
    <React.Fragment>
      <>
        <SiteNav daUser={currentUser} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home daUser={currentUser} />}></Route>
            <Route path="/home" element={<Home daUser={currentUser} />}></Route>

            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/friends/new" element={<FriendNewEdit />}></Route>
            <Route
              path="/friends/:friendid"
              element={<FriendNewEdit />}
            ></Route>

            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/jobs/new" element={<JobNewEdit />}></Route>
            <Route path="/jobs/:jobid" element={<JobNewEdit />}></Route>
            <Route path="/techcompanies" element={<TechCompanies />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route
              path="/testajax"
              element={<TestAjax loginUser={currentUser} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
        <br></br>
        <br></br>
        <footer className="container d-flex justify-content-center">
          <p>&copy; ¡ Migo.co ! 2021-2022</p>
        </footer>
      </>
    </React.Fragment>
  );
}

export default App;
