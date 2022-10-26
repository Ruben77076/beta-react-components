import React from 'react'
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";

function JobModalEdit(props) {
  const thisView = props.jobView;
  const isOpen = props.jobModal;
  const yob = props.jobs;
  
  
  return (
    <React.Fragment>
        <Modal isOpen={isOpen} toggle={thisView}>
            <ModalHeader style={{textAlign:"center"}}  toggle={thisView}>{yob.title}</ModalHeader>
            <ModalBody>{yob.description}</ModalBody>
            <ModalFooter>
                <Button color='secondary' onClick={thisView}>Close</Button>
            </ModalFooter>
        </Modal>
    </React.Fragment>
  );
};

export default JobModalEdit;