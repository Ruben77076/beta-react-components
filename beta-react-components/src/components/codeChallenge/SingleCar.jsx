import React from 'react'

function SingleCar(props) {
    console.log("Heres ur props....",props)
    const car = props.aCarro;
    
  return (
    <div className="container">
        <div className="card col-3" key={"List A"+ car.year}>
            <div className="card-body">
                <h5 className="card-title">{car.make}</h5>
                <h5 className="card-text">{car.model}</h5>
                <h5 className="card-text">{car.year}</h5>
            </div>
        </div>
    </div>
  )
}

export default SingleCar
