import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmBookingPage = ({ userData }) => {

  const navigate = useNavigate(); 
  const { id } = useParams(); 
  const [data, setData] = useState({}); 
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/getsingle', {
          _id: id
        });
        setData(response.data.journeys[0]); 
        console.log(response.data.journeys[0]); 
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]); 

  const handleSubmit = async () => {
    if (!isChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }


    try {
      const id=data._id;
      console.log(id)
      await axios.post('http://localhost:3001/updatestatus', { id });    




       const UpdateArray = {
        From: data.From,
        To: data.To,
        VehicleType: data.VehicleModel,
        JourneyOwnerId: data.CarOwnerId,
        RideMakerId: userData._id,
        distance: data.Distance,
        Cost: data.Cost
      };
      console.log(UpdateArray)
      
  
      await axios.post('http://localhost:3001/updateUserArray', UpdateArray);

      const UpdateResourceData ={
        userOneID:userData._id,
        userTwoID:data.CarOwnerId,
        Litres: data.Distance/data.Milage,
        Distance:data.Distance
      }

      console.log(UpdateResourceData)
      await axios.post('http://localhost:3001/updateresource',UpdateResourceData)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
  <div className="max-w-xl mx-auto bg-white shadow-md rounded px-4 py-6 md:px-8 md:py-8">
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Booking Details</h2>
      <p className="text-gray-600">Confirm your booking details below:</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border-b-2 border-gray-200 pb-2">
        <p className="font-semibold">From:</p>
        <p>{data.From}</p>
      </div>
      <div className="border-b-2 border-gray-200 pb-2">
        <p className="font-semibold">To:</p>
        <p>{data.To}</p>
      </div>
      <div className="border-b-2 border-gray-200 pb-2">
        <p className="font-semibold">Distance:</p>
        <p>{data.Distance}</p>
      </div>
      <div className="border-b-2 border-gray-200 pb-2">
        <p className="font-semibold">Vehicle Model:</p>
        <p>{data.VehicleModel}</p>
      </div>
      <div className="border-b-2 border-gray-200 pb-2">
        <p className="font-semibold">Car Resource Type:</p>
        <p>{data.VehicleResourceType === 0 ? "Electric Vehicle" : "Fuel Vehicle"}</p>
      </div>
    </div>
    <div className="mt-6 text-center">
      <label className="inline-flex items-center">
        <input type="checkbox" className="form-checkbox text-blue-500" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <span className="ml-2 text-gray-700">I agree to the <Link to='termsconditions' className="text-blue-500">terms and conditions</Link></span>
      </label>
    </div>
    <div className="mt-6 text-center">
     <Link to='payment'> <button onClick={handleSubmit} disabled={!isChecked} className={`bg-blue-500 ${isChecked ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'} text-white font-semibold py-2 px-4 rounded inline-block transition duration-300 ease-in-out`}>
        Confirm Booking
      </button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default ConfirmBookingPage;
