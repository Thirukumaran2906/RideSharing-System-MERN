import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import App from './App';
import Header from './Header';
import Journey from './Journey';
import SavedGasUser from './SavedGasUser'
import BrowseJourney from './BrowseJourney';
import Profile from './Profile';
import AllOverSaved from './AllOverSaved';
import AddJourney from './Journey';
import ThanksPage from './ThanksPage';
import HomePage from './HomePage';
import ConfirmBookingPage from './ConfirmBookingPage';
import TermsCondition from './TermsCondition';
import PayMentComponent from './PayMentComponent';
const User = ({userData}) => {
  return (
   <div>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/profile' element={<Profile userData={userData} />}/>
      <Route path='/UserGas' element={<SavedGasUser userData={userData} />}/>
      <Route path='BrowseJourney' element={<BrowseJourney userData={userData} />}/>
      <Route path='/GlobalSaved' element={<AllOverSaved  userData={userData}/>}/>
      <Route path='/AddJourney' element={<Journey  userData={userData}/>}/>
      <Route path='/thanks' element={<ThanksPage />}/>
      <Route path='/BrowseJourney/journeyConfirmation/:id/termsconditions' element={<TermsCondition />}/>
      <Route path='/BrowseJourney/journeyConfirmation/:id/payment'   element={<PayMentComponent userData={userData} />}/>
      <Route path='/BrowseJourney/journeyConfirmation/:id' element={<ConfirmBookingPage userData={userData} />}/>
    </Routes>
   </div>
    
  );
}

export default User

