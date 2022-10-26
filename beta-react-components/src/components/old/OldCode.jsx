//#region ----Inserting Pagination---

// import React from 'react';
// import Pagination from 'rc-pagination';
// import '../../assets/index.less'; ??????

//import "rc-pagination/assets/index.css";
// import locale from "rc-pagination/lib/locale/en_US";


       //****CHANGE TO FUNCTIONAL NO class or this const[state]=useState({current:3}) */
// export default class App extends React.Component {
//     state = {
//       current: 3,
//     };
  
//     onChange = page => {
//       console.log(page);
//       this.setState({
//         current: page,
//       });
//     };
  
//     render() {
//       return (
//         <Pagination
//           onChange={this.onChange}
//           current={this.state.current}
//           total={25}
//           locale={locale}
//         />
//       );
//     }
//   }

// ReactDOM.render(<Pagination />, container);

// export default () => <Pagination simple defaultCurrent={1} total={50} />;
//#endregion
//#region ------Main React Starter Task------
// import React,{useEffect, useState} from "react";
// import "./App.css";

// import {Routes,Route} from "react-router-dom";



// //my F(x) comps
// import SiteNav from "./components/_mainUI/SiteNav";
// import Home from "./components/_mainUI/Home";
// import Friends from "./components/friends/Friends";
// import Jobs from "./components/_mainUI/Jobs";
// import TechCompanies from "./components/_mainUI/TechCompanies";
// import Events from "./components/_mainUI/Events";
// import TestAjax from "./components/_mainUI/TestAjax"
// import Login from "./components/_mainUI/Login";
// import Register from "./components/_mainUI/Register";
// import FriendNewEdit from "./components/friends/FriendNewEdit";
// import appServices from "./services/appServices";
// //import FriendEdit from "./components/friends/FriendEdit";



// function App() {
//   // console.log("THIS IS MY PROPS", props.thisUser);
//   // const loggedUser = props.thisUser;
//   // console.log(loggedUser);

//   const [currentUser,setCurrentUser]=useState({
//     firstName: "",
//     lastName: "",
//     isLoggedIn: false});

//     useEffect(()=>{
//       appServices.getCurrentUser().then(onGetCurrentUserSuccess).catch(onGetCurrentUserError);
//     }, []);

//     const onGetCurrentUserSuccess = (response) => {
//       console.log("onGetCurrentUserSuccess", response.data.item.id);
//       const userId = response.data.item.id;
//       appServices.getUserInfo(userId).then(getUserInfoSuccess).catch(getUserInfoError);
//     }

//     const getUserInfoSuccess = response => {
//       console.log("USER INFO =>", response);
      
//       let gotUser = response.data.item;
//       let gotLogin = response.data.isSuccessful;
      
//       setCurrentUser((prevState)=>{
//         let nowUser = {...prevState};
//         nowUser.firstName = gotUser.firstName;
//         nowUser.lastName = gotUser.lastName;
//         nowUser.isLoggedIn = gotLogin;
        
//         return nowUser;
//       })
      
//     }

//     const getUserInfoError = error => {
//       console.error("GET USER INFO ERROR", error);
//     }

//     const onGetCurrentUserError = error => {
//       console.error("onGetCurrentUserError",error);
//     }
    

//     // setCurrentUser(prevState => {
//     //   let current = {...prevState};

//     // })
  


//   return (
    
//     <React.Fragment>
//       <>
//       <SiteNav daUser={currentUser}/>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home daUser={currentUser}/>}></Route>
//           <Route path="/home" element={<Home daUser={currentUser}/>}></Route>
          
//           <Route path="/friends" element={<Friends />}></Route>
//           <Route path="/friends/new" element={<FriendNewEdit />}></Route>
//           <Route path="/friends/:friendid" element={<FriendNewEdit />}></Route>
          
          
          
//           <Route path="/jobs" element={<Jobs />}></Route>
//           <Route path="/techcompanies" element={<TechCompanies />}></Route>
//           <Route path="/events" element={<Events />}></Route>
//           <Route path="/testajax" element={<TestAjax loginUser={currentUser}/>}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/register" element={<Register />}></Route>
        
//         </Routes>
//       </div>
//       <br></br>
//       <br></br>
//       <footer className="container d-flex justify-content-center">
//         <p>&copy; Sabio 2021-2022</p>
//       </footer>
//       </>
//     </React.Fragment>
    
//   );
// }

// export default App;
//#endregion
//#region -----Cars
// import React from "react";

// import Cars from "./components/codeChallenge/Cars";
// import Home from "./components/codeChallenge/Home";

// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

// function App() {
//   return (
//     <React.Fragment>
//       <>
//         <div className="text-center">From the App</div>
//         <nav
//           className="navbar navbar-expand-md navbar-dark bg-dark"
//           aria-label="Fourth navbar"
//         >
//           <div className="container">
//             <div className="collapse navbar-collapse" id="navbar04">
//               <ul className="navbar-nav me-auto mb-2">
//                 <li className="nav-item px-1">
//                 <Link
//                   to="/home"
//                   id="goHome"
//                   className="nav-link px-2 text-white link-button btn btn-primary"
//                 >
//                   Home
//                 </Link>
//                 </li>
//                 <li className="nav-item">
//                 <Link
//                   to="/cars"
//                   id="goCars"
//                   className="nav-link px-2 text-white link-button btn btn-success"
//                 >
//                   Cars
//                 </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/home" element={<Home />}></Route>
//           <Route path="/cars" element={<Cars />}></Route>
//         </Routes>
//       </>
//     </React.Fragment>
//   );
// }

// export default App;


//#endregion
//#region ------Main App 19AUG22
// import React,{useEffect, useState} from "react";
// import "./App.css";

// import {Routes,Route} from "react-router-dom";



// //my F(x) comps
// import SiteNav from "./components/_mainUI/SiteNav";
// import Home from "./components/_mainUI/Home";
// import Friends from "./components/friends/Friends";
// import Jobs from "./components/_mainUI/Jobs";
// import TechCompanies from "./components/_mainUI/TechCompanies";
// import Events from "./components/_mainUI/Events";
// import TestAjax from "./components/_mainUI/TestAjax"
// import Login from "./components/_mainUI/Login";
// import Register from "./components/_mainUI/Register";
// import FriendNewEdit from "./components/friends/FriendNewEdit";
// import appServices from "./services/appServices";
// //import FriendEdit from "./components/friends/FriendEdit";



// function App() {
//   // console.log("THIS IS MY PROPS", props.thisUser);
//   // const loggedUser = props.thisUser;
//   // console.log(loggedUser);

//   const [currentUser,setCurrentUser]=useState({
//     firstName: "",
//     lastName: "",
//     isLoggedIn: false});

//     useEffect(()=>{
//       appServices.getCurrentUser().then(onGetCurrentUserSuccess).catch(onGetCurrentUserError);
//     }, []);

//     const onGetCurrentUserSuccess = (response) => {
//       console.log("onGetCurrentUserSuccess", response.data.item.id);
//       const userId = response.data.item.id;
//       appServices.getUserInfo(userId).then(getUserInfoSuccess).catch(getUserInfoError);
//     }

//     const getUserInfoSuccess = response => {
//       console.log("USER INFO =>", response);
      
//       let gotUser = response.data.item;
//       let gotLogin = response.data.isSuccessful;
      
//       setCurrentUser((prevState)=>{
//         let nowUser = {...prevState};
//         nowUser.firstName = gotUser.firstName;
//         nowUser.lastName = gotUser.lastName;
//         nowUser.isLoggedIn = gotLogin;
        
//         return nowUser;
//       })
      
//     }

//     const getUserInfoError = error => {
//       console.error("GET USER INFO ERROR", error);
//     }

//     const onGetCurrentUserError = error => {
//       console.error("onGetCurrentUserError",error);
//     }
    

//     // setCurrentUser(prevState => {
//     //   let current = {...prevState};

//     // })
  


//   return (
    
//     <React.Fragment>
//       <>
//       <SiteNav daUser={currentUser}/>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home daUser={currentUser}/>}></Route>
//           <Route path="/home" element={<Home daUser={currentUser}/>}></Route>
          
//           <Route path="/friends" element={<Friends />}></Route>
//           <Route path="/friends/new" element={<FriendNewEdit />}></Route>
//           <Route path="/friends/:friendid" element={<FriendNewEdit />}></Route>
          
          
          
//           <Route path="/jobs" element={<Jobs />}></Route>
//           <Route path="/techcompanies" element={<TechCompanies />}></Route>
//           <Route path="/events" element={<Events />}></Route>
//           <Route path="/testajax" element={<TestAjax loginUser={currentUser}/>}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/register" element={<Register />}></Route>
        
//         </Routes>
//       </div>
//       <br></br>
//       <br></br>
//       <footer className="container d-flex justify-content-center">
//         <p>&copy; Sabio 2021-2022</p>
//       </footer>
//       </>
//     </React.Fragment>
    
//   );
// }

// export default App;
//#endregion
//#region ------React Forms Asses 2
// import React from 'react'
// import "./App.css";
// import {Routes,Route} from "react-router-dom";
// import Comment from './components/codeChallenge/Comment';
// import {Link} from "react-router-dom"

// function App() {
//   return (
//     <React.Fragment>
//       <div className='text-center pe-5'>From App</div>
//       <div className="text-center pe-5">Sending to  https://jsonplaceholder.typicode.com/posts</div>
//       <br></br>
//       <div className="container">
//         <div className="col d-flex justify-content-center">
//         <Link type="button" className="btn btn-success" to="/">
//                 App
//         </Link>
//              &nbsp;
//         <Link type="button" className="btn btn-primary" to="/comment">
//                 Comment Page
//         </Link>
//         </div>
//       </div>
//       <Routes>
        
//         <Route path='/Comment' element={<Comment />}></Route>
//       </Routes>




//     </React.Fragment>
//   )
// }

// export default App
//#endregion
//#region -----Main App 26AUG22
// import React, { useEffect,useState } from "react";
// import "./App.css";

// import { Routes, Route, useLocation } from "react-router-dom";

// //my F(x) comps
// import SiteNav from "./components/_mainUI/SiteNav";
// import Home from "./components/_mainUI/Home";
// import Friends from "./components/friends/Friends";
// import Jobs from "./components/jobs/Jobs";
// import TechCompanies from "./components/_mainUI/TechCompanies";
// import Events from "./components/_mainUI/Events";
// import TestAjax from "./components/_mainUI/TestAjax";
// import Login from "./components/_mainUI/Login";
// import Register from "./components/_mainUI/Register";
// import FriendNewEdit from "./components/friends/FriendNewEdit";
// import appServices from "./services/appServices";
// import JobNewEdit from "./components/jobs/JobNewEdit";
// //import FriendEdit from "./components/friends/FriendEdit";

// function App() {
//   const { state } = useLocation();
  

//   const [currentUser, setCurrentUser] = useState({
//     firstName: "",
//     lastName: "",
//     isLoggedIn: false,
//   });
  
  
//   useEffect(() => {
//     const onGetCurrentUserSuccess = (response) => {
//       console.log("onGetCurrentUserSuccess", response.data.item.id);
//       const userId = response.data.item.id;
//       appServices
//       .getUserInfo(userId)
//       .then(getUserInfoSuccess)
//       .catch(getUserInfoError);
//     };
    
//     appServices
//     .getCurrentUser()
//     .then(onGetCurrentUserSuccess)
//     .catch(onGetCurrentUserError);
    
//     const getUserInfoSuccess = (response) => {
//       console.log("USER INFO =>", response);
      
//       let gotUser = response.data.item;
//       let gotLogin = response.data.isSuccessful;
      
//       setCurrentUser((prevState) => {
//         let nowUser = { ...prevState };
//         nowUser.firstName = gotUser.firstName;
//         nowUser.lastName = gotUser.lastName;
//         nowUser.isLoggedIn = gotLogin;
        
//         return nowUser;
//       });
//     };
//     if (state?.payload && state?.type === "USER_LOGOUT") {
//       setCurrentUser(() => {
//         const pd = { ...state.payload };
//         return pd;
//       });
//     }
//     // const timer = setTimeout(() => {
//     //   window.location.reload();
//     // }, 50000);
//     // return () => clearTimeout(timer);
//   }, [Route,state,]);
  
  
//   const getUserInfoError = (error) => {
//     console.error("GET USER INFO ERROR", error);
//   };

//   const onGetCurrentUserError = (error) => {
//     console.error("onGetCurrentUserError", error);
//   };

//   // setCurrentUser(prevState => {
//   //   let current = {...prevState};

//   // })

//   return (
//     <React.Fragment>
//       <>
//         <SiteNav daUser={currentUser} />
//         <div className="container">
//           <Routes>
//             <Route path="/" element={<Home daUser={currentUser} />}></Route>
//             <Route path="/home" element={<Home daUser={currentUser} />}></Route>

//             <Route path="/friends" element={<Friends />}></Route>
//             <Route path="/friends/new" element={<FriendNewEdit />}></Route>
//             <Route
//               path="/friends/:friendid"
//               element={<FriendNewEdit />}
//             ></Route>

//             <Route path="/jobs" element={<Jobs />}></Route>
//             <Route path="/jobs/new" element={<JobNewEdit />}></Route>
//             <Route path="/jobs/:jobid" element={<JobNewEdit />}></Route>
//             <Route path="/techcompanies" element={<TechCompanies />}></Route>
//             <Route path="/events" element={<Events />}></Route>
//             <Route
//               path="/testajax"
//               element={<TestAjax loginUser={currentUser} />}
//             ></Route>
//             <Route path="/login" element={<Login />}></Route>
//             <Route path="/register" element={<Register />}></Route>
//           </Routes>
//         </div>
//         <br></br>
//         <br></br>
//         <footer className="container d-flex justify-content-center">
//           <p>&copy; Sabio 2021-2022</p>
//         </footer>
//       </>
//     </React.Fragment>
//   );
// }

// export default App;

//#endregion
//#region -------React Map Makeup Test----
// import React from 'react'
// import {Routes,Route, Link} from "react-router-dom"

// //funx components
// import Users from "./components/codeChallenge/Users"
// function App() {
//   return (
//     <React.Fragment>
//       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//         <div className="container">
//           <div className="collapse navbar-collapse justify-content-center bg-danger">
//             <li className="nav-item d-flex">
//               <Link to="/users" id='users' className='nav-link px-2 text-white link-button'>
//               Users
//               </Link>
//             </li>
//           </div>
//         </div>
//       </nav>
//       <footer className='text-center'>From the App presented by Ruben</footer>
//       <Routes>
//         <Route path='/users' element={<Users/>}></Route>
//       </Routes>

//     </React.Fragment>
//   )
// }

// export default App
//#endregion
//#region -----Login Before Formik add 21SEP22
// import React, { useState } from "react";
// import appServices from "../../services/appServices";
// import {useNavigate} from "react-router-dom";
// import toastr from "toastr";
// import {Formik,Form,Field, ErrorMessage} from "formik";
// import * as Yup from "yup";


// const basicSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email").required("Required"),
//     password: Yup.string().password("Invalid password").required("Required")

// })



// function Login() {
//   let navigate = useNavigate();
  
  
//   const [person, setPersonData] = useState({
//     email: "",
//     password: "",
//     tenantId: "rrj713",
//   });
  
    
//   const onLoginOk=(response)=>{
//     const gotUserOk=(response)=>{
//       console.log("Got the user @login=>>>",response);
//       var userId=response.data.item.id;
//       appServices.getUserInfo(userId).then(onInfoSuccess).catch(onInfoError);
//     }
//     const onInfoSuccess=(response)=>{
//       console.log("got user info***",response);
//       var theUser = response.data.item;
      
//       navigateToLoginHome(theUser);
//     }
//     const gotUserFail=(error)=>{
//       console.error("Failed currentUser @login=>>>",error)
//     }
//     const onInfoError=(error)=>{
//       console.error("Wtf just happened InfoError",error);
//     }
//     //console.log("We are in the mainframe!!!",response);
//     toastr.success("LESSS GOOO")
    
//     var loginBool = response.data.isSuccessful;
//     console.log("Here is your token****",loginBool);
    
//     appServices.getCurrentUser().then(gotUserOk).catch(gotUserFail);
    
//     const navigateToLoginHome=(user)=>{
//       const stateForTransport = {
//         type: "USER_LOGIN",
//         payload: {
//           firstName: user.firstName,
//           lastName: user.lastName,
//           isLoggedIn: loginBool,
//         },
//       };
  
//       navigate("/home",{state:stateForTransport});
//     }
    
//   }
  
//   const onLoginErr=(response)=>{
//     console.error("Thats not good",response);
//     toastr.error("Nopeee u go away",{
//       position:"top-center",
//       autoClose: 5000,
//       closeOnClick: true,});
//   }

//   const onPersonDataChange = (e) => {
//     const target = e.target;
//     const newUserValue = target.value;
//     const idOfField = target.id;
//     // console.log({ idOfField, newUserValue });

//     setPersonData((prevState) => {
//       console.log("updater onChange");

//       const newUserPack = {
//         ...prevState,
//       };
//       //newUserObject.nameOfField
//       newUserPack[idOfField] = newUserValue;

//       return newUserPack;
//     });

//     console.log("end onChange");
//   };
//   const onLoginClick = (e) => {
//     e.preventDefault();
//     appServices.userLogin(person).then(onLoginOk).catch(onLoginErr);
//   };
  
//   return (
//     <React.Fragment>
//       <div style={{textAlign:"center"}}>Go on, Git!</div>
      
//       <br></br>
//       <div className="container">
//         <div className="row">
//           <div className="form-container d-flex justify-content-center">
//             <Formik 
//             enableReinitialize={true} 
//             initialValues={person}
//             onSubmit={onLoginClick}
//             validationSchema={basicSchema}
//             >
//               <Form>
//                 <form className="col-5">
//                     <div className="form-group text-center">
//                       <label htmlFor="email">Email address</label>
//                       <Field 
//                       type='email' 
//                       name="email"
//                       placeholder="Enter Name"
//                       component="input"
//                       className="form-control text-center"
//                       />
//                       <ErrorMessage name="email" component="div" className="has-error"/>
//                       {/* <input
//                         type="email"
//                         className="form-control text-center"
//                         id="email"
//                         aria-describedby="email"
//                         placeholder="Enter your email"
//                         value={person.email}
//                         onChange={onPersonDataChange}
//                       /> */}
//                     </div>
//                     <br></br>
//                     <div className="form-group text-center">
//                       <label htmlFor="password">Password</label>
//                       <Field 
//                       type="password" 
//                       name="password"
//                       placeholder="Enter Password"
//                       component="input"
//                       className="form-control text-center"
//                       />
//                       <ErrorMessage name="password" component="div" className="has-error"/>
                      
//                       {/* <input
//                         type="password"
//                         className="form-control text-center"
//                         id="password"
//                         placeholder="¿Got Password?"
//                         value={person.password}
//                         onChange={onPersonDataChange}
//                       /> */}
//                     </div>
//                     <br></br>
//                     <div className="d-flex justify-content-center" role="group">
//                     <button
//                       type="submit"
//                       className="btn btn-primary"
//                       onClick={onLoginClick}
//                     >
//                       Submit
//                     </button>

//                     </div>
//                   </form>
        
//               </Form>
//             </Formik>
//           </div>
//         </div>
//       </div>

//       <hr />
//     </React.Fragment>
//   );
// }

// export default Login;



//#endregion
//#region 
//#endregion
//#region 
//#endregion



