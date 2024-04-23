import React from 'react';
import Header from './Header';
import { Footer } from './Footerr';
import img from '../others/MainDash.png'
import dash from '../others/dashboard.jpg'
import dash2 from '../others/car.jpg'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
    <Header />
      <section className="homepage bg-cover bg-center h-screen relative homeimg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex items-center justify-center h-full relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 z-1">Eco Friendly Ride Sharing System</h1>
            <p className="text-lg mb-8 z-1">Users can register their travel plans, connecting with others on the platform for collaborative trips.</p>
           <Link to='/UserGas'><a href="#services" className="text-black inline-block py-3 px-8 bg-white rounded-full uppercase font-semibold transition duration-300 hover:bg-opacity-75 z-1">Individual DashBoard</a></Link> 
            <Link to='/GlobalSaved'><a href="#services" className="text-black inline-block py-3 px-8 ml-10 bg-white rounded-full uppercase font-semibold transition duration-300 hover:bg-opacity-75 z-1">Global DashBoard</a></Link>
          </div>
        </div>
      </section>

      <section className="services py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white rounded-lg overflow-hidden shadow-md">
              <img src={dash} alt="Tents" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Individual DashBoard</h3>
                <p className="text-gray-700">One unique feature of our platform is the real-time display of cumulative greenhouse gas emissions , pollution reduction achieved collectively with total resources saved by users.</p>
              </div>
            </div>
            <div className="card bg-white rounded-lg overflow-hidden shadow-md">
              <img src={img}alt="Sleeping Bags" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Global Awareness</h3>
                <p className="text-gray-700">To raise awareness, we've implemented a Resource Savings Dashboard to showcase the platform's positive impact, emphasizing environmental benefits and fostering eco-consciousness among users.
</p>
              </div>
            </div>
            <div className="card bg-white rounded-lg overflow-hidden shadow-md">
              <img src={dash2} alt="Camp Stoves" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">User Friendly PlatForm</h3>
                <p className="text-gray-700">Accessible features and clear instructions facilitate seamless interactions, enhancing overall user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Homepage;
