const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({ 
    Name:{type:String},
    Email:{type:String},
    From:{type:String},
    To:{type:String},
    Distance:{type:Number},
    CarOwnerId:{type:String},
    date:{String},
    Time:{Type:Number},
    Gender:{type:Number},  // 1 male &&  0 na female
    VehcileResourceType:{type:Number}, //  0 means e vehcile && 1 means petrol disel
    VehicleModel:{type:String},
    VehicleNumber:{type:String},
    Milage:{type:Number},
    Cost:{type:Number},
    UserComments:{type:String},
    BookingStatus: { type: Number, default: 1 } , // 1 means available && 0 means booked
  });
  const Journey = mongoose.model('journeys', RideSchema);
  module.exports = Journey


  


















//   const Journey = require('../models/AddRidesModel');
// const User = require('../models/RegisterModel');


// const AddJourney = async (req, res) => {

  
//   try {
//     const RideData = {
//       Name: req.body.Name,
//       Gender:req.body.Gender,
//       Email: req.body.Email,
//       From:req.body.From,
//       To:req.body.To,
//       Distance:req.body.Distance,
//       CarOwnerId:req.body.CarOwnerId,
//       Date:req.body.date,
//       Time:req.body.Time,
//       VehcileResourceType:req.body.VehcileResourceType,
//       VehicleNumber:req.body.VehicleNumber,
//       VehicleModel:req.body.VehicleModel,
//       Milage:req.body.Milage,
//       Cost:req.body.Cost,
//       UserComments:req.body.UserComments,
//       BookingStatus:1
//     };
//     const newJourney = await Journey.create(RideData);
//     res.status(201).json(RideData);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
// const findJourney = async (req, res) => {
//   try {
//     const { _id, From, To ,VehcileResourceType, Gender} = req.body; 
//     const journeys = await Journey.find({  _id , From, To , BookingStatus: 1  ,VehcileResourceType });
//     res.status(200).json({ journeys });
//   } catch (error) {
//     console.error('Error finding journey:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
// const updateBookingStatus = async (req, res) => {
//   try {
//     const journeyId = req.body.id; // sending the journey id through body 
//     const updatedJourney = await Journey.findByIdAndUpdate(journeyId,{ BookingStatus: 0 });
//     if (!updatedJourney) {
//       return res.status(404).json({ error: 'Journey not found' });
//     }
//     res.status(200).json({ message: 'Booking status updated successfully', journey: updatedJourney });
//   } catch (error) {
//     console.error('Error updating booking status:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
// const updateUserArray = async (req, res) => {
//   try {
//     const { JourneyOwnerId, RideMakerID } = req.body;
//     const RideOwnerData = {
//       From: req.body.From,
//       To: req.body.To,
//       VehicleType: req.body.VehicleType,
//       CarOwnerId: req.body.JourneyOwnerId,
//       RideMakerId: req.body.RideMakerId,
//       Date: req.body.date,
//       distance: req.body.distance,
//       Cost: req.body.Cost
//     };
//     const updatedUser = await User.findByIdAndUpdate(
//       JourneyOwnerId,
//       { $push: { JourneyBooked: RideOwnerData } },
//       { new: true }
//     );
//     const RiderUpdate = await User.findByIdAndUpdate(
//       RideMakerID,{ $push: { RideTravelled: RideOwnerData } },{ new: true }
//     );
//     if (!updatedUser || !RiderUpdate) {
//       return res.status(404).json({ error: 'User not found 1' });
//     }
//     res.status(200).json({ message: 'Journey data added to JourneyBooked array', user: updatedUser });
//   } catch (error) {
//     console.error('Error updating user data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
// const findSingleJourney = async (req, res) => {
//   try {
//     const { _id } = req.body; 
//     const journeys = await Journey.find({  _id });
//     res.status(200).json({ journeys });
//   } catch (error) {
//     console.error('Error finding journey:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };



// module.exports = { AddJourney,findJourney,updateBookingStatus,updateUserArray ,findSingleJourney};
