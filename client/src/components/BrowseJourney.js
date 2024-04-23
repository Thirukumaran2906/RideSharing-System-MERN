import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Browse.css';
import './Card.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";import Header from './Header';
function BrowseJourney() {
    var i=0;
    const [From, setFrom] = useState('');
    const [To, setTo] = useState('');
    const [VehcileResourceType, setVehcileResourceType] = useState('');
    const [Gender, setGender] = useState('');
    const [journeys, setJourneys] = useState([]);
    const [dispMilage, setDispMilage] = useState([]);
    const [journeysNotFound, setJourneysNotFound] = useState(false);

    useEffect(() => {
    }, [journeys]);

    const performSearch = async () => {
        try {
            const response = await axios.post('http://localhost:3001/findjourney', {
                From: From,
                To: To,
                VehcileResourceType: VehcileResourceType,
                Gender: Gender === 'male' ? 1 : 0,
                VehcileResourceType: VehcileResourceType === 'ev' ? 0 : 1
            });
            if (response.data.journeys.length === 0) {
                setJourneysNotFound(true);
            } else {
                setJourneys(response.data.journeys);
                const mil=response.data.journeys.Milage;
                const dist=response.data.journeys.Distance;
                const totalweight=Number(dist)/(mil);
                setDispMilage(totalweight)
                setJourneysNotFound(false);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
        <Header />
        <div className='Home-app'>
            <div className="containerbrowse mt-5">
                <form className="animated fadeInUp">
                    <div className="form-row">
                        <div className="col-md-6 mb-3 position-relative">
                            <label htmlFor="fromLocation"><i className="fas fa-map-marker-alt form-icon"></i> From Location</label>
                            <input type="text" className="form-control typeahead" id="fromLocation" placeholder="Enter From Location" required
                                value={From} onChange={e => setFrom(e.target.value)} />
                        </div>
                        <div className="col-md-6 mb-3 position-relative">
                            <label htmlFor="toLocation"><i className="fas fa-map-marker-alt form-icon"></i> To Location</label>
                            <input type="text" className="form-control typeahead" id="toLocation" placeholder="Enter To Location" required
                                value={To} onChange={e => setTo(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3 position-relative">
                            <label htmlFor="vehicleType"><i className="fas fa-car form-icon"></i> Select Vehicle Type</label>
                            <select className="form-control" id="vehicleType" required
                                value={VehcileResourceType} onChange={e => setVehcileResourceType(e.target.value)}>
                                <option value="" disabled>Select a Vehicle Type</option>
                                <option value="ev">Electric Vehicle (EV)</option>
                                <option value="normal">Diesel Vehicle</option>
                                <option value="petrol">Petrol Vehicle</option>
                                <option value="hybrid">Hybrid Vehicle</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3 position-relative">
                            <label htmlFor="driverType"><i className="fas fa-user form-icon"></i> Select Driver Type</label>
                            <select className="form-control" id="driverType" required
                                value={Gender} onChange={e => setGender(e.target.value)}>
                                <option value="" disabled>Select a Driver Type</option>
                                <option value="male">Male Driver</option>
                                <option value="female">Female Driver</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row center-button">
                    <div className="col-md-12 mb-3">
    <button className="btn btn-primary btn-block btn-icon animated bounceIn" type="button" onClick={performSearch} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <i className="fas fa-car" style={{ marginRight: '8px' }}></i>Book a Journey
    </button>
</div>

                    </div>
                </form>
            </div>
            <br></br>
            <br></br>
           
            <div className='mapping-data-in' >
                {journeys.map((journey, index) => (
                    <div className="container_book" key={index}>
                        <div className="booking_info">
                            <div className="book_one">
                                <div className="from_to">
                                    <h2 className="icon-basic-pin1">{journey.From}</h2>
                                    <h2 className="icon-basic-signs"><FaArrowRight /></h2>
                                    <h2 className="icon-basic-geolocalize-01">{journey.To}</h2>
                                </div>
                                <div className="distance">
                                    <p className="text mar_bot">
                                        Total distance: <span className="span">{journey.Distance}</span>
                                    </p>
                                </div>
                                <div className="fuel">
                                    <p className="text fule_text mar_bot">{journey.VehcileResourceType ===0 ? "Electric vehicle" : "Fuel"}</p>
                                </div>
                            </div>
                            <div className="book_two">
                                <div className="bookin_time">
                                   
                                </div>
                                <div className="vehicle">
                                    <p className="text mar_bot">
                                        Vehicle Model: <span className="span">{journey.VehicleModel}</span>
                                    </p>
                                </div>
                                <div className="cost">
                                    <p className="text mar_bot">
                                        Cost: <span className="span">{journey.Cost}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <center>
                            <div className="btn-main-box">
                               <Link to={`\journeyConfirmation/${journey._id}`}><button className="book_btn">Book Now</button></Link> 
                            </div>
                        </center>
                        <div className="booking_advantage">
                            <p>
                                Through This Ride, You have reduced <span className="change_percentage  span">{Math.round(journeys[i].Distance /journeys[i].Milage)}%</span> of CO2 compared to your normal ride.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default BrowseJourney;
