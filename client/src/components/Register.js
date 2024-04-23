import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function RegistrationForm() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    Name: '',
    username: '',
    Gender: 'male' ? 1 : 0,
    dob: '',
    Email: '',
    Password: '',
    confirmPassword: '',
    Number: '',
    idProof: '',
    IdProofNumber: '',
    Address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log(typeof(formData.Gender))
    axios.post('http://localhost:3001/adduser', formData)
      .then(response => {
        navigate('tq');
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="container mx-auto mt-5 p-4 bg-gray-700 rounded shadow-lg transition-all duration-500">
      <form id="registrationForm" className="animated fadeInUp" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="Name" className="text-sm">Name</label>
            <input type="text" className="form-control" name="Name" placeholder="Enter your name" required onChange={handleChange} value={formData.Name} />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="username" className="text-sm">Username</label>
            <input type="text" className="form-control" name="username" placeholder="Enter your username" required />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="Gender" className="text-sm">Gender</label>
            <select className="form-control" name="Gender" required onChange={handleChange} value={formData.Gender}>
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="dob" className="text-sm">Date of Birth</label>
            <input type="date" className="form-control" name="dob" required onChange={handleChange} value={formData.dob} />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="Email" className="text-sm">Email ID</label>
            <input type="email" className="form-control" name="Email" placeholder="Enter your email" required onChange={handleChange} value={formData.Email} />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="Password" className="text-sm">Password</label>
            <input type="password" className="form-control" name="Password" placeholder="Enter your password" required onChange={handleChange} value={formData.Password} />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm password" required />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="Number" className="text-sm">Mobile Number</label>
            <input type="tel" className="form-control" name="Number" placeholder="Enter your mobile number" required onChange={handleChange} value={formData.Number} />
          </div>

          <div className="w-full px-2 mb-4">
            <label htmlFor="Address" className="text-sm">Address</label>
            <textarea className="form-control" name="Address" rows="3" placeholder="Enter your address" required onChange={handleChange} value={formData.Address}></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button type="submit" className="btn btn-primary btn-block btn-icon animated bounceIn w-full md:w-1/2">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
