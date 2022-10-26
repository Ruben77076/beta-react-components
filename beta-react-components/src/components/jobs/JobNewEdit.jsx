import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import jobService from '../../services/jobService';
import toastr from 'toastr';

function JobNewEdit() {
  let navigate = useNavigate();

  const[jobEdit,setJobEdit]=useState({
    title:"",
    description:"",
    summary:"",
    pay:"",
    slug:"",
    statusId:"",
    techCompanyId: 51253,
    skills:[],
  })
  const[companies,setCompanies]=useState({comps:[],compsData:[]})
  
  const onBackToYobs=e=>{
    e.preventDefault();
    navigate('/jobs')
  }
  const onGotTechCompsOK=(response)=>{
    const companyIds = response.item.pagedItems;
    
    setCompanies((prevState)=>{
        const newComp = {...prevState};
        newComp.comps = companyIds;
        newComp.compsData = companyIds.map(mapCompanies);
        return newComp
    })
    
    console.log("onGotTechCompsOk==>>>>",companyIds,);
  }
  
  const mapCompanies = (company)=>{
    return (<option key={company.id} value={company.id}>{company.id} {company.name}</option>);
    }
  
    const onGetTechCompsFail=(err)=>{
    console.error("onGetTechCompsFail=>>",err);
  }
  const getAllCompanies=(pageIndex,pageSize)=>{
    console.log("getAllCompanies",pageIndex,pageSize);
    jobService.getTechCompanies(0,10).then(onGotTechCompsOK).catch(onGetTechCompsFail);
  }
  useEffect(()=>{
    getAllCompanies(0,10)
  },[]);

  const onJobChange = (e) => {
    const target = e.target;
    const newJobValue = target.value;
    const idOfField = target.id;
    console.log({ idOfField, newJobValue });

    setJobEdit((prevState) => {
      console.log("updater onChange");

      const newJobObj = {
        ...prevState,
      };
      //newJobObj.nameOfField
      newJobObj[idOfField] = newJobValue;
      
      return newJobObj;
    });

    console.log("end onChange");
  };
  
  const onJobSubOk=(response)=>{
    console.log("You just created Jobs for COVID=>>>",response)
    toastr["success"]("Geee congrats, you actually have 1 Yob?")
    
  }
  const onJobSubFail=(err)=>{
    console.error("onJobSubFail==>>>>",err);
  }
  const onJobSubmit=e=>{
    e.preventDefault();
    console.log("U just tried to create Jobs");
    jobEdit.skills= jobEdit.skills.split(",")
    jobService.addJob(jobEdit).then(onJobSubOk).catch(onJobSubFail);
  }
  return (
    <>
    <React.Fragment>
        <div style={{ textAlign: "center" }}>We do edits here</div>
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-primary"
            id="jobs"
            style={{margin:"50px"}}
            onClick={onBackToYobs}
            data-page="/jobs"
            to="/jobs"
          >
            Back to Yobs
          </Link>
        </div>
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
                    placeholder="Enter your Job Title"
                    value={jobEdit.title}
                    onChange={onJobChange}
                  />
                </div>
                <br></br>
                <div className="form-group text-center">
                  <label htmlFor="desc">Description</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="description"
                    placeholder="Give me the full story"
                    value={jobEdit.bio}
                    onChange={onJobChange}
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
                    value={jobEdit.summary}
                    onChange={onJobChange}
                  />
                </div>
                <br></br>
                <div className="form-group text-center">
                  <label htmlFor="pay">Pay</label>
                  <input
                    type="pay"
                    className="form-control text-center"
                    id="pay"
                    placeholder="¿Got some pay?"
                    value={jobEdit.pay}
                    onChange={onJobChange}
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
                    value={jobEdit.slug}
                    onChange={onJobChange}
                  />
                </div>
                <br></br>
                <div className="form-group text-center">
                <label htmlFor="statusId">Gimme da Status</label>
                  <select
                    className="form-select text-center"
                    id="statusId"
                    aria-label="statusId"
                    value={jobEdit.statusId}
                    onChange={onJobChange}
                  >
                    <option value="" disabled>--Choose the Status--</option>
                    <option key="NotSet" value="NotSet">NotSet</option>
                    <option key="Active" value="Active">Active</option>
                    <option key="Deleted" value="Deleted">Deleted</option>
                    <option key="Flagged" value="Flagged">Flagged</option>
                  </select>
                </div>
                <br></br>
                <div className="form-group text-center">
                <label htmlFor="techCompId">TechCompany</label>
                  <select
                    className="form-select text-center"
                    id="techCompanyId"
                    aria-label="techCompId"
                    value={jobEdit.techCompanyId}
                    onChange={onJobChange}
                    placeholder="<--Choose the Company-->"
                  >
                    <option value="" disabled>---Choose the Company---</option>
                    {companies.compsData}
                    </select>
                </div>
                <br></br>
                    <div className="form-group text-center">
                      <label htmlFor="skills">Skills</label>
                      <input
                        type="skills"
                        className="form-control text-center"
                        id="skills"
                        placeholder="¿Got Skills?"
                        value={jobEdit.skills}
                        onChange={onJobChange}
                      />
                    </div>
                <br></br>
                <div className="d-flex justify-content-center">
                {/* {JobUpdate ? 
                 <button
                 type="submit"
                    className="btn btn-success "
                    onClick={onFriendUpdate}
                  >
                    Update Amigo
                  </button>
                  : */}
                  <button
                    type="submit"
                    className="btn btn-primary "
                    onClick={onJobSubmit}
                  >
                    Add Yob
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

export default JobNewEdit