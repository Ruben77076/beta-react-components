import React,{useEffect, useState} from 'react'
import jobService from '../../services/jobService';
import JobsCard from './JobsCard';
import {Link, useNavigate} from "react-router-dom"

function Jobs() {
  let navigate = useNavigate();

  const[dataSearch,setDataSearch]=useState({q:""})
  const[yobs,setYobs]=useState({jobs:[],jobsComponent:[]})
  
  const getAllJobs = (pageIndex,pageSize)=>{
    console.log("getAllJObs",pageIndex,pageSize);
    jobService.getJobs(pageIndex,pageSize).then(onGetJobSuccess).catch(onGetJobFail);
  }
  useEffect(()=>{
    getAllJobs(0,12)
  },[])
  const onGetJobSuccess=(response)=>{
    console.log("onJObsuccess=>>>",response);
    const jobsArray = response.item.pagedItems;
    console.log(jobsArray);
    
    setYobs((prevState)=>{
      const newYob = {...prevState};
      newYob.jobs = jobsArray;
      newYob.jobsComponent = jobsArray.map(mapJobs);
      return newYob;
    });
  }
  const onGetJobFail=(err)=>{
    console.error("onJobFail=>>>",err);
  }

  const mapJobs=(job)=>{
    console.log("map deeez yobs***",job);
    return (
      <JobsCard aJob={job}/>
    );
  };
  
  const onAddJobClick=(e)=>{
    e.preventDefault();
    console.log("i do some jazz");
    navigate('/jobs/new')
  }


  const onSearch = e=>{
    const target = e.target;
    const newSearchValue = target.value;
    const idOfField = target.id;
    //console.log({idOfField,newSearchValue});

    setDataSearch((prevState)=>{
      console.log("updater onChanging=>>");
      const newSearchObj = {
        ...prevState,
      };
      newSearchObj[idOfField]=newSearchValue;
      return newSearchObj;
    });
    console.log("end changing=>>>");
  }
  const onClickSearch =e=>{
    e.preventDefault();
    console.log("i do a clicky");
  }
  
  return (
    <>
    <React.Fragment>
        <div className='text-center'><h3>Sabio, can a brotha get a Yob?</h3></div>
        <br></br>
        <div className="container-fluid d-flex col justify-content-center">
          <form className="d-flex">
            <input 
            type="search"
            className="form-control me-2 text-center"
            id='q'
            placeholder='Search Yobs'
            aria-label='search'
            value={dataSearch.q}
            onChange={onSearch}
            />
            <button className="btn btn-outline-success" type="submit" onClick={onClickSearch}>Search</button>
          </form>
          <div className='d-flex'  style={{width:"225px"}}></div>
          <Link
            className="btn btn-primary"
            type="Link"
            id="JobNewEdit"
            onClick={onAddJobClick}
            data-page="/jobs/new"
            to="/jobs/new"
          >
            Add Yobs
          </Link>
        </div>
        <br></br>
        <div className='container'>
          <div className='row flex-wrap'>
            {yobs.jobsComponent}
          </div>
        </div>
    </React.Fragment>
    </>
  )
}

export default Jobs