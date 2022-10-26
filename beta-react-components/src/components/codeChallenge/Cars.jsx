import React, {useState} from "react";
import SingleCar from "./SingleCar";

function Cars() {
  // const[pickedCars,setPickedCars]=useState({theseCars:[]});
  // console.log(pickedCars);
  
  const[showCarros,setShowCarros]=useState(false)
  const[show2018Carros,setShow2018Carros]=useState(false)
  const[show2019Carros,setShow2019Carros]=useState(false)
  const[show2020Carros,setShow2020Carros]=useState(false)
  const[show2021Carros,setShow2021Carros]=useState(false)
  
  const[carros,setCarros]=useState({myCars:[
      {
        make: "Kia",
        model: "Sorento",
        year: 2020,
      },
      {
        make: "Kia",
        model: "Optima",
        year: 2019,
      },
      {
        make: "Tesla",
        model: "Model 3",
        year: 2021,
      },
      {
        make: "Honda",
        model: "Civic",
        year: 2019,
      },
      {
        make: "Honda",
        model: "Accord",
        year: 2018,
      },
      {
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2021,
      },
      {
        make: "Ford",
        model: "Mustang",
        year: 2019,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2019,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2020,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2021,
      }
    ],
    my2018Cars:[],
    my2019Cars:[],
    my2020Cars:[],
    my2021Cars:[],


  })
  
  /*  */
      // setPickedCars((prevState)=>{
      //     const getCars = {...prevState};
          
      //     getCars.theseCars = givenCars;
      //     let filteredCars = getCars.theseCars.filter((myCar)=>myCar.year === "2018")
      //     getCars.theseCars = givenCars.map(mapCarros);
          
      //     return filteredCars;
      //   })
      //   (year)=>{
      //   let filteredCars = givenCars.filter((myCar)=>myCar.year === year)
      //   return filteredCars;
      // })
      // console.log(pickedCars);
      
        
      /* // setPickedCars((prevState)=>{
      //   const getCars = {...prevState};
      //   getCars.theseCars = givenCars.map(mapCarros).push();
      // }) */
      




  // const givenCars = [
  //   {
  //     make: "Kia",
  //     model: "Sorento",
  //     year: 2020,
  //   },
  //   {
  //     make: "Kia",
  //     model: "Optima",
  //     year: 2019,
  //   },
  //   {
  //     make: "Tesla",
  //     model: "Model 3",
  //     year: 2021,
  //   },
  //   {
  //     make: "Honda",
  //     model: "Civic",
  //     year: 2019,
  //   },
  //   {
  //     make: "Honda",
  //     model: "Accord",
  //     year: 2018,
  //   },
  //   {
  //     make: "Volkswagen",
  //     model: "Jetta",
  //     year: 2021,
  //   },
  //   {
  //     make: "Toyota",
  //     model: "Camry",
  //     year: 2021,
  //   },
  //   {
  //     make: "Ford",
  //     model: "Mustang",
  //     year: 2019,
  //   },
  //   {
  //     make: "Ford",
  //     model: "F-150",
  //     year: 2019,
  //   },
  //   {
  //     make: "Toyota",
  //     model: "Camry",
  //     year: 2020,
  //   },
  //   {
  //     make: "Ford",
  //     model: "F-150",
  //     year: 2021,
  //   },
  // ];
  
  const allCarsArr= carros.myCars;
  const year2018Arr=carros.my2018Cars;
  const year2019Arr=carros.my2019Cars;
  const year2020Arr=carros.my2020Cars;
  const year2021Arr=carros.my2021Cars;
  
  const onResetCars=()=>{
    setCarros([]);
  }
  // const onCarYearClick = (year)=>{
  //   let filteredCars = givenCars.filter((myCar)=>myCar.year === year)
  //   setPickedCars(filteredCars)
  //   console.log(filteredCars);
  // }


  const mapCarros = (car)=>{
    console.log("got the wheelz=>>>",car);
    
    return (
        <SingleCar aCarro={car}/>
    )
  }
  const onShowClick = (e) => {
    e.preventDefault();
    show2018Carros?setShow2018Carros(false):console.log("no show 2018 cars");
    show2019Carros?setShow2019Carros(false):console.log("no show 2019cars");
    show2020Carros?setShow2020Carros(false):console.log("no show 2020 cars");
    show2021Carros?setShow2021Carros(false):console.log("no show 2021 cars");
    console.log("Am i showing?=>>>", carros);
    setShowCarros(()=>{
        return !showCarros;
    })
  };
  const on2018Click = (e) => {
    e.preventDefault();
    showCarros?setShowCarros(false):console.log("no show all cars");
    show2019Carros?setShow2019Carros(false):console.log("no show 2019cars");
    show2020Carros?setShow2020Carros(false):console.log("no show 2020 cars");
    show2021Carros?setShow2021Carros(false):console.log("no show 2021 cars");
    console.log("Am i showing 2018=>>>",carros.my2018Cars);
    setShow2018Carros(()=>{
      return !show2018Carros;
      })
    return need2018Cars(carros.myCars)  
  };
  
  const need2018Cars =(carsArr)=>{
    const filteredCars = car=> car.year === 2018;
    const grabCars = carsArr.filter(filteredCars);
    console.log(grabCars);
    setCarros((prevState)=>{
      const theCars = {...prevState};
      theCars.my2018Cars = grabCars;
      return theCars;
    })
  }
  const on2019Click = (e) => {
    e.preventDefault();
    showCarros?setShowCarros(false):console.log("no show all cars");
    show2018Carros?setShow2018Carros(false):console.log("no show 2019cars");
    show2020Carros?setShow2020Carros(false):console.log("no show 2020 cars");
    show2021Carros?setShow2021Carros(false):console.log("no show 2021 cars");
    setShow2019Carros(()=>{
      return !show2019Carros;
    })
    console.log("Am i showing 2019?=>>>",carros);
    return need2019Cars(carros.myCars)
  };
  const need2019Cars =(carsArr)=>{
    const filteredCars = car=> car.year === 2019;
    const grabCars = carsArr.filter(filteredCars);
    console.log(grabCars);
    setCarros((prevState)=>{
      const theCars = {...prevState};
      theCars.my2019Cars = grabCars;
      return theCars;
    })
  }
  const on2020Click = (e) => {
    e.preventDefault();
    showCarros?setShowCarros(false):console.log("no show all cars");
    show2018Carros?setShow2018Carros(false):console.log("no show 2018cars");
    show2019Carros?setShow2019Carros(false):console.log("no show 2019 cars");
    show2021Carros?setShow2021Carros(false):console.log("no show 2021 cars");
    setShow2020Carros(()=>{
      return !show2020Carros;
    })
    console.log("Am i showing 2020?=>>>",carros);
    return need2020Cars(carros.myCars)
  };
  const need2020Cars =(carsArr)=>{
    const filteredCars = car=> car.year === 2020;
    const grabCars = carsArr.filter(filteredCars);
    console.log(grabCars);
    setCarros((prevState)=>{
      const theCars = {...prevState};
      theCars.my2020Cars = grabCars;
      return theCars;
    })
  }
  const on2021Click = (e) => {
    e.preventDefault();
    showCarros?setShowCarros(false):console.log("no show all cars");
    show2018Carros?setShow2018Carros(false):console.log("no show 2018cars");
    show2019Carros?setShow2019Carros(false):console.log("no show 2019 cars");
    show2020Carros?setShow2020Carros(false):console.log("no show 2020 cars");
    setShow2021Carros(()=>{
      return !show2021Carros;
    })
    console.log("Am i showing2021?=>>>",carros);
    return need2021Cars(carros.myCars)
  };
  const need2021Cars =(carsArr)=>{
    const filteredCars = car=> car.year === 2021;
    const grabCars = carsArr.filter(filteredCars);
    console.log(grabCars);
    setCarros((prevState)=>{
      const theCars = {...prevState};
      theCars.my2021Cars = grabCars;
      return theCars;
    })
  }
  return (
    <React.Fragment>
      <div className="text-center">Cars</div>
        <button
          className="btn btn-primary mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={onResetCars}
        >
          Reset Cars
        </button>
      <br></br>
      <div className="container">
        <div className="d-flex justify-content-center mb-5">
        
        {showCarros ? 
        <button
          className="btn btn-warning mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={onShowClick}
        >
          Hide Cars
        </button>
        :
        <button
          className="btn btn-primary mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={onShowClick}
        >
          Show Cars
        </button>
        }
        {show2018Carros ?
        <button
          className="btn btn-warning mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={on2018Click}
        >
          Hide Cars
        </button>
        :
        <button
          className="btn btn-primary mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={on2018Click}
        >
          2018 Cars
        </button>
        }
        {show2019Carros?
        <button
          className="btn btn-warning mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={on2019Click}
        >
          Hide Cars
        </button>
        :
        <button
          className="btn btn-primary mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={on2019Click}
        >
          2019 Cars
        </button>
        }
        {show2020Carros?
        <button
         className="btn btn-warning mt-3 px-5"
         style={{ margin: "5px" }}
         onClick={on2020Click}
        >
         Hide Cars
        </button>
        :
        <button
          className="btn btn-primary mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={on2020Click}
        >
          2020 Cars
        </button>
        } 
        {show2021Carros?
        <button
         className="btn btn-warning mt-3 px-5"
         style={{ margin: "5px" }}
         onClick={on2021Click}
        >
         Hide Cars
        </button>
        :
        <button
          className="btn btn-primary mt-3 px-5"
          style={{ margin: "5px" }}
          onClick={on2021Click}
        >
          2021 Cars
        </button>
        }
        </div>
        <div className="row flex-wrap">
            {showCarros ? allCarsArr.map(mapCarros):console.log("wheres all cars")}
            {show2018Carros ? year2018Arr.map(mapCarros):console.log("wheres the 2018s")}
            {show2019Carros ? year2019Arr.map(mapCarros):console.log("wheres the 2019s")}
            {show2020Carros ? year2020Arr.map(mapCarros):console.log("wheres the 2019s")}
            {show2021Carros ? year2021Arr.map(mapCarros):console.log("wheres the 2019s")}
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default Cars;
