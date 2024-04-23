import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img from '../imgs/login.img.jpeg'
const Login = ({ SetopenHome, SetopenUser , SetUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.data.success) {
        SetUserData(response.data.userData);
        SetopenUser(true); 
        SetopenHome(false);
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">User Login</h1>

            <p className="mt-4 text-gray-500">
              
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                
                </span>
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex items-center justify-between">
              <Link to='/reg'><p onClick={()=>SetopenHome(false)} className="text-sm text-gray-500">
                No account?
                <a className="underline" href="#">Sign up</a>
              </p></Link>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src={img}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
