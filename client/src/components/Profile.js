import React, { useEffect } from 'react';
import './login.css';
import { Footer } from './Footerr';
import profilePic from '../others/profilePicUser.png'
import Header from './Header';

const Profile = ( userData ) => {
    useEffect(()=>{
        console.log(userData);
    },[userData])
    return (
        <div >
        <Header />
            <section className="section about-section gray-bg" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">{userData.userData.Name}</h3>

                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Gender</label>
                                            <p>{userData.userData.Gender=== 1 ? "Male" : "Female"}</p>
                                        </div>
                                        <div className="media">
                                            <label>Email</label>
                                            <p>{userData.userData.Email}</p>
                                        </div>
                                        <div className="media">
                                            <label>Address</label>
                                            <p>{userData.userData.Address}</p>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                    <div className="col-md-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="about-avatar">
                                <img
                                    src={profilePic}
                                    title=""
                                    alt=""
                                    style={{
                                        width: '250px',
                                        height: '250px',
                                        objectFit: 'cover',
                                        border: '1px solid #ccc',
                                        borderRadius: '5px',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                    <div className='w-100% h-250px'><br /></div>
                    <div className='w-100% h-250px'><br /></div>
                    <div className='w-100% h-250px'><br /></div>
                    <div className="counter">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="500" data-speed="500">{userData.userData.TotalBooking}</h6>
                                    <p className="m-0px font-w-600">Booked Rides</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="150" data-speed="150">{userData.userData.TotalRides}</h6>
                                    <p className="m-0px font-w-600">Journey Booked</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="850" data-speed="850">{userData.userData.TotalDistance + " "}kms</h6>
                                    <p className="m-0px font-w-600">Total Distance Travelled</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="190" data-speed="190">{Math.round(userData.userData.TotalFuelsaved)+" "}L</h6>
                                    <p className="m-0px font-w-600">Fuel Saved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Profile;
