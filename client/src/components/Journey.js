import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { Footer } from './Footerr';


const Journey = ({ userData }) => {
  useEffect(()=>{
    console.log(userData.Gender)
  },[])
  const navigate = useNavigate(); 

  const [showDetails, setShowDetails] = useState(false);
  const [gender, setGender] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('ev');
  const [date, setDate] = useState('');
  const [mileage, setMileage] = useState(15);
  const [costToPay, setCostToPay] = useState(500);
  const [comments, setComments] = useState('');

  const handleSubmit = async () => {
    try {
      const formData = {
        Name: userData.Name,
        Email: userData.Email,
        From: from,
        To: to,
        Distance:250,
        CarOwnerId:userData._id,
        date: date,
        Time: 12, 
        Gender:userData.Gender,
        VehcileResourceType: vehicleType === 'ev' ? 0 : 1, // 0 for electric, 1 for petrol/diesel
        VehicleModel: vehicleModel,
        VehicleNumber: vehicleNumber,
        Milage: mileage,
        Cost: costToPay,
        UserComments: comments,
        BookingStatus: 1 // Default to available when booking
      };

      const response = await axios.post('http://localhost:3001/addjourney', formData).then(()=>{
        navigate('/thanks');
      });

    } catch (error) {
      console.error('Error occurred:', error);
    }
    setGender('')
    setComments('')
    setFrom('')
    setTo('')
    setMileage('')
    setVehicleType('ev')
    setVehicleNumber('')
    setVehicleModel('');setDate('')
    setCostToPay('')
  };



  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleVehicleModelChange = (event) => {
    setVehicleModel(event.target.value);
  };

  const handleVehicleNumberChange = (event) => {
    setVehicleNumber(event.target.value);
  };

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleMileageChange = (event) => {
    setMileage(event.target.value);
  };

  const handleCostToPayChange = (event) => {
    setCostToPay(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  return (
    <div><Header />
    <div style={{ overflowY: 'hidden' }}>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="from">
                        From
                      </label>
                      <input type="text" id="from" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={from} onChange={handleFromChange}  required/>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="to">
                        TO
                      </label>
                      <input type="email" id="to" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={to} onChange={handleToChange} required/>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="vehicle-model">
                        Vehicle Model
                      </label>
                      <input type="text" id="vehicle-model" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={vehicleModel} onChange={handleVehicleModelChange} required />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="vehicle-number">
                       Vehicle Number
                      </label>
                      <input type="text" id="vehicle-number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={vehicleNumber} onChange={handleVehicleNumberChange} required/>
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="vehicle-type">
                        Vehicle Type
                      </label>
                      <select id="vehicle-type" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={vehicleType} onChange={handleVehicleTypeChange}>
                        <option value="ev">EV (Electric Vehicle)</option>
                        <option value="normal">Petrol</option>
                        <option value="normal">Diesel</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="date-input">
                        Date
                    </label>
                    <input id="date-input" type="date" className="border-2 border-blueGray-300 rounded px-4 py-2 focus:outline-none focus:border-indigo-500" value={date} onChange={handleDateChange} required/>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="mileage">
                        Mileage
                      </label>
                      <input type="text" id="mileage" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={mileage} onChange={handleMileageChange} />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="cost-to-pay">
                        Cost to Pay
                      </label>
                      <input type="text" id="cost-to-pay" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={costToPay} onChange={handleCostToPayChange} required/>
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="personal-comments">
                        Personal Comments to Rider
                      </label>
                      <textarea type="text" id="personal-comments" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" value={comments} onChange={handleCommentsChange}></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <footer className="relative pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowDetails(true)}
                  >
                    Post Journey
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
      {showDetails && (
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90 flex items-center justify-center">
          <div className="bg-gray-200 p-8 rounded-md">
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                setShowDetails(false);
                handleSubmit();
              }}
            >
              Confirm and Book Ride
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}

export default Journey;