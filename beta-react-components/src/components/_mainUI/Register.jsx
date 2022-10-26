import React,{useState} from 'react'
import appServices from '../../services/appServices';
import {useNavigate} from "react-router-dom"
import toastr from 'toastr';


function Register() {
  let navigate= useNavigate();

  const[regData,setRegData]=useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "rrj713",
  })
  
  const onRegOk=(response)=>{
    console.log("We did it****",response);
    navigate("/login");
    toastr.success("You are now registered with the IRS. Thank you!",{
      position:"top-center",
      autoClose: 5000,
      closeOnClick: true,
    })
  }
  const onRegErr=(response)=>{
    console.error("Nopeee, try again",response);
  }
  


  const onRegChange = (e) => {
    const target = e.target;
    const newRegisterValue = target.value;
    const idOfField = target.id;
    // console.log({ idOfField, newRegisterValue });

    setRegData((prevState) => {
      console.log("updater onChange");

      const newRegisterObj = {
        ...prevState,
      };
      //newRegisterObj.nameOfField
      newRegisterObj[idOfField] = newRegisterValue;

      return newRegisterObj;
    });

    console.log("end onChange");
  };
  const onRegSubmit=(e)=>{
    e.preventDefault();
    console.log("I do a clicky thing");
    appServices.userRegister(regData).then(onRegOk).catch(onRegErr);
  }

  return (
    <React.Fragment>
    <div className='container d-flex justify-content-center'>
      <h3>Let's get you,Registered!</h3>
      </div>
      <br></br>
    <div className="container">
        <div className="row ">
          <div className="form-container col d-flex justify-content-center">
            <form className="col-5">
              <div className="form-group text-center ">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control text-center"
                  id="email"
                  aria-describedby="email"
                  placeholder="Enter your email"
                  value={regData.email}
                  onChange={onRegChange}
                />
              </div>
              <br></br>
              <div className="form-group text-center">
                <label htmlFor="fName">First Name</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="firstName"
                  placeholder="Who you?"
                  value={regData.firstName}
                  onChange={onRegChange}
                />
              </div>
              <br></br>

              <div className="form-group text-center">
                <label htmlFor="lName">Last Name</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="lastName"
                  aria-describedby="lName"
                  placeholder="Who your family name?"
                  value={regData.lastName}
                  onChange={onRegChange}
                />
              </div>
              <br></br>
              <div className="form-group text-center">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control text-center"
                  id="password"
                  placeholder="¿Got Password?"
                  value={regData.password}
                  onChange={onRegChange}
                />
              </div>
              <br></br>

              <div className="form-group text-center">
                <label htmlFor="password">Password Confirmation</label>
                <input
                  type="password"
                  className="form-control text-center"
                  id="passwordConfirm"
                  placeholder="¿Got Password Again?"
                  value={regData.passwordConfirm}
                  onChange={onRegChange}
                />
              </div>
              <br></br>
              <div className="form-group text-center">
                <label htmlFor="url">Profile URL</label>
                <input
                  type="text"
                  className="form-control text-center "
                  id="avatarUrl"
                  aria-describedby="url"
                  placeholder="Provide a URL to an image"
                  value={regData.avatarUrl}
                  onChange={onRegChange}
                />
              </div>
              <br></br>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary "
                  onClick={onRegSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register