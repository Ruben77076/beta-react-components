import React, { useState } from "react";
import appServices from "../../services/appServices";
import {useNavigate} from "react-router-dom";
import toastr from "toastr";
import {Formik,Form,Field, ErrorMessage} from "formik";
import * as Yup from "yup";


const basicSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Password Required")

})



function Login() {
  let navigate = useNavigate();
  
  
  const [person] = useState({
    email: "",
    password: "",
    tenantId: "rrj713",
  });
  
    
  const onLoginOk=(response)=>{
    const gotUserOk=(response)=>{
      console.log("Got the user @login=>>>",response);
      var userId=response.data.item.id;
      appServices.getUserInfo(userId).then(onInfoSuccess).catch(onInfoError);
    }
    const onInfoSuccess=(response)=>{
      console.log("got user info***",response);
      var theUser = response.data.item;
      
      navigateToLoginHome(theUser);
    }
    const gotUserFail=(error)=>{
      console.error("Failed currentUser @login=>>>",error)
    }
    const onInfoError=(error)=>{
      console.error("Wtf just happened InfoError",error);
    }
    //console.log("We are in the mainframe!!!",response);
    toastr.success("LESSS GOOO")
    
    var loginBool = response.data.isSuccessful;
    console.log("Here is your token****",loginBool);
    
    appServices.getCurrentUser().then(gotUserOk).catch(gotUserFail);
    
    const navigateToLoginHome=(user)=>{
      const stateForTransport = {
        type: "USER_LOGIN",
        payload: {
          firstName: user.firstName,
          lastName: user.lastName,
          isLoggedIn: loginBool,
        },
      };
  
      navigate("/home",{state:stateForTransport});
    }
  }
  
  const onLoginErr=(response)=>{
    console.error("Thats not good",response);
    toastr.error("Nopeee u go away",{
      position:"top-center",
      autoClose: 5000,
      closeOnClick: true,});
  }
  const onLoginClick = (values) => {
    appServices.userLogin(values).then(onLoginOk).catch(onLoginErr);
  };
  
  return (
    <React.Fragment>
      <div style={{textAlign:"center"}}>Go on, Git!</div>
      
      <br></br>
      <div className="container">
        <div className="row">
          <div className="form-container d-flex justify-content-center">
            <Formik 
            enableReinitialize={true} 
            initialValues={person}
            onSubmit={onLoginClick}
            validationSchema={basicSchema}
            >
              <Form>
                <div className="col">
                    <div className="form-group text-center">
                      <label htmlFor="email">Email address</label>
                      <Field 
                      type='email' 
                      name="email"
                      placeholder="¿Got Email?"
                      component="input"
                      className="form-control text-center"
                      />
                      <ErrorMessage name="email" component="div" className="has-error"/>
                      
                    </div>
                    <br></br>
                    <div className="form-group text-center">
                      <label htmlFor="password">Password</label>
                      <Field 
                      type="password" 
                      name="password"
                      placeholder="¿Got Password?"
                      component="input"
                      className="form-control text-center"
                      />
                      <ErrorMessage name="password" component="div" className="has-error"/>
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-center" role="group">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>

                    </div>
                  </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      <hr />
    </React.Fragment>
  );
}

export default Login;
