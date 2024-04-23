const Journey = require('../models/AddRidesModel');
const User = require('../models/RegisterModel');


const AddJourney = async (req, res) => {
  try {
    const RideData = {
      Name: req.body.Name,
      Gender:req.body.Gender,
      Email: req.body.Email,
      From:req.body.From,
      To:req.body.To,
      Distance:req.body.Distance,
      CarOwnerId:req.body.CarOwnerId,
      Date:req.body.date,
      Time:req.body.Time,
      VehcileResourceType:req.body.VehcileResourceType,
      VehicleNumber:req.body.VehicleNumber,
      VehicleModel:req.body.VehicleModel,
      Milage:req.body.Milage,
      Cost:req.body.Cost,
      UserComments:req.body.UserComments,
      BookingStatus:1
    };
    const newJourney = await Journey.create(RideData);
    res.status(201).json(RideData);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'server error' });
  }
};
const findJourney = async (req, res) => {
  try {
    const { From, To ,VehcileResourceType, Gender} = req.body; 
    const journeys = await Journey.find({ From, To , BookingStatus: 1  ,VehcileResourceType , Gender : Gender });
    res.status(200).json({ journeys });
  } catch (error) {
    console.error('Error finding journey:', error);
    res.status(500).json({ error: 'server error' });
  }
};
const updateBookingStatus = async (req, res) => {
  try {
    const journeyId = req.body.id; // sending the journey id through body 
    const updatedJourney = await Journey.findByIdAndUpdate(journeyId,{ BookingStatus: 0 });
    if (!updatedJourney) {
      return res.status(404).json({ error: 'Journey not found' });
    }
    res.status(200).json({ message: 'Booking status updated successfully', journey: updatedJourney });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({ error: 'server error' });
  }
};
const updateUserArray = async (req, res) => {
  try {
    const RideOwnerData = {
      From: req.body.From,
      To: req.body.To,
      VehicleType: req.body.VehicleType,
      JourneyOwnerId: req.body.JourneyOwnerId,
      RideMakerId: req.body.RideMakerId,
      distance: req.body.distance,
      Cost: req.body.Cost
    };

    const user = await User.findById(RideOwnerData.JourneyOwnerId);
    if (!user) {
      return res.status(404).json({ error: 'Journey owner not found' });
    }

    const rideMaker = await User.findById(RideOwnerData.RideMakerId);
    if (!rideMaker) {
      return res.status(404).json({ error: 'Ride maker not found' });
    }

    user.JourneyBooked.push(RideOwnerData);
    rideMaker.RideTravelled.push(RideOwnerData);

    await user.save();
    await rideMaker.save();

    res.status(200).json({ message: 'Journey data added to JourneyBooked and RideTravelled arrays', user: user, rideMaker: rideMaker });
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ error: 'server error' });
  }
};
const findSingleJourney = async (req, res) => {
  try {
    const { _id } = req.body; 
    const journeys = await Journey.find({  _id });
    res.status(200).json({ journeys });
  } catch (error) {
    console.error('Error finding journey:', error);
    res.status(500).json({ error: 'server error' });
  }
};



module.exports = { AddJourney,findJourney,updateBookingStatus,updateUserArray ,findSingleJourney};
