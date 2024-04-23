import React from 'react';
import tick from '../others/tick.gif'
const ThanksPage = () => {
  const cardStyle = {
    maxWidth: '70%',
    border: '2px solid green',
    borderRadius: '20px',
    padding: '30px',
    animation: 'header 3s',
    backfaceVisibility: 'hidden',
  };

  const tickStyle = {
    width: '200px',
    animation: 'tick 3s',
    transition: 'all 1s',
    borderRadius: '50%',
    animation: 'spin 2s',
    animationDelay: '1s',
  };

  const headingStyle = {
    textTransform: 'uppercase',
    fontSize: '50px',
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    letterSpacing: '5px',
    transition: 'all .2s',
    perspective: '1200px',
  };

  const paraStyle = {
    fontSize: '20px',
    textTransform: 'capitalize',
  };
  const containerWhatsApp = {
    width: '100%',
    height: '150px',
    display: 'flex',
    justifyContent: 'center', // CamelCase for CSS properties
    alignItems: 'center', // CamelCase for CSS properties
    backgroundColor: '#f0f0f0', // CamelCase for CSS properties
  };
  
  const whatsappBtn = {
    padding: '10px 20px',
    backgroundColor: '#25D366', // Correct CamelCase and color format
    color: 'white', // Ensure the color value is in quotes
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  };
  
  

  return (
    <div>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4" style={cardStyle}>
        <h1 className="card-title text-center mb-4 heading_booking_confirm" style={headingStyle}>Thank you</h1>
        <div className="d-flex justify-content-center mb-4">
          <img src={tick} alt="" width="100px" style={tickStyle} />
        </div>
        <p className="card-text text-center para" style={paraStyle}>Visit Active journey page to view more information</p>
      </div>
    </div>
    <div style={containerWhatsApp}>
    <a href="https://wa.me/+919994279979"style={whatsappBtn} target="_blank">WhatsApp</a>
    </div>
    </div>
  );
};

export default ThanksPage;
