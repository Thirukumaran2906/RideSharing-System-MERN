import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import User from './User';
import Register from './Register';
import { Routes, Route } from "react-router-dom";
import ThanksPage from './ThanksPage';

const App = () => {
  // State variables to manage component visibility and user data
  const [openHome, setOpenHome] = useState(true);
  const [openUser, setOpenUser] = useState(false);
  const [userData, setUserData] = useState({});

  return (
    <div className='Home-app'>
     <Routes>
      <Route path='/reg' element={<Register />}/>
      <Route path='/req/tq' element={<ThanksPage />}/>
     </Routes>
      {openHome && (
        <Login 
          SetopenHome={setOpenHome}  
          SetopenUser={setOpenUser}  
          SetUserData={setUserData} 
        />
      )}
     

     
      {openUser && <User userData={userData} />}
    </div>
  );
};

export default App;
