import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PaymentComponent = ( userData ) => {
  useEffect(()=>{
    console.log(userData.userData.Email)
  },[])
  const navigate = useNavigate(); 

  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCVC] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailData = {
        To: userData.userData.Email
      };

      await axios.post('http://localhost:3001/sendmail', emailData).then((result) => {
        navigate('/thanks');
      }).catch((err) => {
        alert('there is a error')
        
      });
    } catch (err) {
      console.error(err);
      alert('Error sending email');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-xl rounded-lg py-10 px-5 m-4 w-full max-w-lg">
      <h1>* Insurance Policy included</h1>

        <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">Payment Information</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expiration" className="block text-gray-700 text-sm font-bold mb-2">Expiration Date:</label>
            <input
              type="text"
              id="expiration"
              name="expiration"
              placeholder="MM/YY"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cvc" className="block text-gray-700 text-sm font-bold mb-2">CVC:</label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="123"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Your Country"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentComponent;
