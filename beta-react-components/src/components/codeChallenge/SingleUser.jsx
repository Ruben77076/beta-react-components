import React from 'react'

function SingleUser(props) {
    const ppl = props.aPerson;
    //const pplKey = props.key;

    console.log(ppl);

    const onLocalLogClick =e=>{
        e.preventDefault();
        console.log("this from SingleUser=>>>",e);
        props.onUserLogClick(ppl)
    }

    return (
      <React.Fragment>
        <div className="col-4 card-group" key={ppl.id}>
            <div className="card border-secondary">
                <h5 className='card-header text-center'>{ppl.name}</h5>
                <div className="card-body text-center">
                    <h5 className="card-title">{ppl.email}</h5>
                    <p className="card-text">
                    </p>
                    <button className='btn btn-success' onClick={onLocalLogClick}>
                    Console Log Id    
                    </button>    
                </div>
            </div>
        </div>
      </React.Fragment>
  )
}

export default SingleUser