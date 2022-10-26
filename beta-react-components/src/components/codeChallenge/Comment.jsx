import React,{useState} from 'react'
import commentService from './services/commentService';
import toastr from 'toastr';

function Comment() {
    const[testData,setTestData]=useState({
        title:"",
        body:"",
        userId:"",
    })
    const onTestChange = (e) => {
        const target = e.target;
        const newTestValue = target.value;
        const idOfField = target.id;
        // console.log({ idOfField, newTestValue });
    
        setTestData((prevState) => {
          console.log("updater onChange");
    
          const newTestObj = {
            ...prevState,
          };
          //newTestObj.nameOfField
          newTestObj[idOfField] = newTestValue;
    
          return newTestObj;
        });
    
        console.log("end onChange");
      };
    const onSubmitOk=(data)=>{
        console.log("You added comment=>>>>",data);
        toastr.success("You are now registered with the IRS. Thank you!",{
            position:"top-center",
            autoClose: 5000,
            closeOnClick: true,
          })
    }
    const onSubmitFail=(error)=>{
        console.error("You failed to comment=>>>>>",error);
    }
    const onTestSubmit = (e)=>{
        e.preventDefault();
        console.log("i do a clicky")
        commentService.addComment(testData).then(onSubmitOk).catch(onSubmitFail);
    }
  return (
    <>
    <React.Fragment>
    <div className='text-center pe-5'>Comment</div>
    <br></br>
    <div className="container pe-5">
        <div className="row">
            <div className="form-container col d-flex justify-content-center">
                <form className="col-5">
                    <div className="form-group text-center">
                    <label htmlFor="title">Title</label>
                    <input
                    type="title"
                    className="form-control text-center"
                    id="title"
                    aria-describedby="title"
                    placeholder="Enter your title"
                    value={testData.title}
                    onChange={onTestChange}
                    />
                    </div>
                    <br></br>
                    <div className="form-group text-center">
                    <label htmlFor="body">Body</label>
                    <input
                    type="text"
                    className="form-control text-center"
                    id="body"
                    placeholder="Give me more detail"
                    value={testData.body}
                    onChange={onTestChange}
                    />
                    </div>
                    <br></br>

                    <div className="form-group text-center">
                    <label htmlFor="userId">User ID</label>
                    <input
                    type="text"
                    className="form-control text-center"
                    id="userId"
                    aria-describedby="userId"
                    placeholder="Gimme your ID"
                    value={testData.userId}
                    onChange={onTestChange}
                    />
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-center">
                    <button
                    type="submit"
                    className="btn btn-primary "
                    onClick={onTestSubmit}
                    >
                    Submit
                    </button>
                    
                    </div>
                </form>
            </div>
        </div>
    </div>

    </React.Fragment>
    </>
  )
}

export default Comment