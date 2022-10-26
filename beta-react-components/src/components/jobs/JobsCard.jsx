import React,{useState} from "react";
import JobModalEdit from "./JobModalEdit";

import PropTypes from 'prop-types';


function JobsCard(props) {

  const job = props.aJob;
  const jobImage = job.techCompany.images;
  const jobId = job.id
  jobImage.forEach(image => {
        jobImage.img= image.imageUrl});

  const[modalOpen,setModalOpen]=useState(false) 
  
  const onLocalJobDeleteClick=e=>{
    e.preventDefault();
    }
  const onLocalJobEditClick=e=>{
    e.preventDefault();
    }
  const modalToggle=()=>{
    setModalOpen(()=>{
        return !modalOpen;
    });
    console.log("did the modal open?=>>>",modalOpen)
    }

  JobsCard.propTypes = {
    pay: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    onLocalJobEditClick: PropTypes.func.isRequired,
    onLocalJobDeleteClick:PropTypes.func.isRequired,
    modalToggle: PropTypes.func
  };

  return (
    <React.Fragment>
        
    <br></br>
    <div className="col-3" key={"ListA-"+jobId}>
      <div className="card shadow bg-dark border border-secondary rounded h-100">
        <img
          src={jobImage.img}
          alt="...job"
          className="card-img-top img-responsive rounded-circle"
          style={{ width: "100%", height: "235px" }}
        />
      <div className="card-body">
        <h5 className="card-title text-center">{job.pay}</h5>
        <p className="card-text text-center">{job.title}</p>
        <p className="card-text text-center">{job.techCompany.profile}</p>
      </div>
        <div className="d-flex justify-content-center card-footer">
          <button className="link-btn btn btn-primary" type="link" 
          onClick={onLocalJobEditClick}
          >
            Edit me
          </button>
          &nbsp;
          <button className="link-btn btn btn-danger" 
          onClick={onLocalJobDeleteClick}
          >
            Delete this
          </button>
        </div>
        <div className="d-flex justify-content-center card-footer">
            <button className="link-btn btn btn-secondary"
            onClick={modalToggle}
            >
            View more...
            </button>
        </div>
      </div>
    </div>
    <JobModalEdit 
          jobView={modalToggle} jobModal={modalOpen}
          isOpen={modalOpen}
          toggleModal={modalToggle}
          title={"Title"}
          content={"Put ur content"}
          jobs={job}
    />
    
    
    </React.Fragment>
  );
}

export default JobsCard;
