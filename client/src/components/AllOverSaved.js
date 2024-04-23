import React, { useEffect, useState } from 'react';
import { Footer } from './Footerr';
import Header from './Header.js'

const AllOverSaved = () => {
  const [globalData, setGlobalData] = useState({}); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/globaldata');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setGlobalData(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <Header />
      <div className="h-full bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Global Awareness</h2>
              <p className="text-lg leading-8 text-gray-300">This is an Awareness Dashboard for Users to Display How Much Gas is Saved Globally Through this Web Application</p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Total Fuel Saved</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.TotalFuelsaved)+ " "}L</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Total Distance saved</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{globalData.TotalDistance+ " "}Kms</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Total Rides</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{globalData.totalrides+ " "}+</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Total Bookings</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{globalData.totalBooking+ " "}+</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Carbon-di-Oxide</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.CarbonDiOxide)+ " "}Kg</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">CarbonMonoOxide</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.CarbonMonOxide)+" "}g</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">NitrogenOxide</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.NitrogenOxide)+" "}g</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">HydroCarbons</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.HydroCarbons)+ " "}g</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">SulphurDiOxide</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.SulphurDiOxide)+ " "}g</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">BenzeneEmission</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.BenzeneEmission)+ " "}g</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">ParticularMatter</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.ParticularMatter)+ " "}g</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">TotalFuelSaved</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{Math.round(globalData.TotalFuelsaved)+ " "}L</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllOverSaved;
