const bcrypt = require('bcrypt');
const User = require('../models/RegisterModel');
const GlobalGas=require('../models/GlobalGasModel')
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "ecoridenewtesting@gmail.com", 
    pass:"hffhtsrenabhnvnd" ,
  },
});

const register = async (req, res) => {
  try {
    
    const { Name, Email, Password, Number, Gender, Address, IdProofNumber } = req.body;

    const userData = {
      Name: Name,
      Email: Email,
      Password: Password, // Storing the password directly without hashing -> testing purpose
      IdProofNumber: IdProofNumber,
      Gender:Gender,
      Number: Number,
      Gender:1,
      Address: Address,
    };

    const newUser = await User.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ Email : email });
    console.log(user.data)
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (user.Password !== password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    res.status(200).json({ success: true, message: 'Login successful',userData: user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'server error' });
  }
};
const updateResource = async (req, res) => {
  const { userOneID, userTwoID, Litres ,Distance} = req.body;
  try {
    const userOne = await User.findById(userOneID);
    const userTwo = await User.findById(userTwoID);
    const globalData = await GlobalGas.findById("65d5481116f06477cf1e4ca7");
    if (!userOne || !userTwo) {
      return res.status(404).json({ message: 'User not found' });
    }

    userOne.ResourceSaved.CarbonDiOxide += 2.46 * Litres;
    userOne.ResourceSaved.CarbonMonOxide += 2.3 * Litres;
    userOne.ResourceSaved.NitrogenOxide += 1.6 * Litres;
    userOne.ResourceSaved.HydroCarbons += 9 * Litres;
    userOne.ResourceSaved.ParticularMatter += 0.4 * Litres;
    userOne.ResourceSaved.SulphurDiOxide += 0.06 * Litres;
    userOne.ResourceSaved.BenzeneEmission += 0.75 * Litres;
    userOne.TotalRides+= 1;
    userOne.TotalDistance+= Distance;
    userOne.TotalFuelsaved+= Litres;

    userTwo.ResourceSaved.CarbonDiOxide += 2.46 * Litres;
    userTwo.ResourceSaved.CarbonMonOxide += 2.3 * Litres;
    userTwo.ResourceSaved.NitrogenOxide += 1.6 * Litres;
    userTwo.ResourceSaved.HydroCarbons += 9 * Litres;
    userTwo.ResourceSaved.ParticularMatter += 0.4 * Litres;
    userTwo.ResourceSaved.SulphurDiOxide += 0.06 * Litres;
    userTwo.TotalBooking +=  1 ;
    userTwo.TotalDistance+=Distance;
    userTwo.TotalFuelsaved+=Litres

    globalData.CarbonDiOxide += 2.46 * Litres;
    globalData.CarbonMonOxide += 2.3 * Litres;
    globalData.NitrogenOxide += 1.6 * Litres;
    globalData.HydroCarbons += 9 * Litres;
    globalData.ParticularMatter += 0.4 * Litres;
    globalData.SulphurDiOxide += 0.06 * Litres;
    globalData.totalBooking +=  1 ;
    globalData.TotalDistance+=Distance;
    globalData.totalrides+=1;
    globalData.ParticularMatter+=0.6;
    globalData.BenzeneEmission+=0.3;
    globalData.TotalFuelsaved+=Litres

    await userOne.save();
    await userTwo.save();
    await globalData.save(); 

    return res.status(200).json({ message: 'Resources updated successfully', userOne, userTwo });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error });
  }
};
const SendMail = (req, res) => {
  const { To } = req.body;
  const policyNumber=Math.floor(Math.random() * 1000000) + 1;

  const mailOptions = {
    from:"ecoridenewtesting@gmail.com", 
    to: To,
    subject: "Booking Confirmed EcoRide",
    html:`<b><h4>Thanks for booking Your journey Through EcoRide<b></h4><br><h5>Rider Will call Back You Shortly .<br> Thank you for choosing our insurance policy! your <h2><b>POLICY NUMBER IS ${policyNumber}</b><h4> Your decision ensures a safer and more secure life ahead. We're here to make your journey through life worry-free.<b> Your insurance policy is booked</b>, and we look forward to providing you with the support and coverage your need. Happy journey! The user will be in touch with you soon to discuss further details.</h5>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error occurred while sending email:', error.message);
      return res.status(500).send({ message: 'Failed to send email', error: error.message });
    }
    console.log('Email sent successfully!');
    res.send({ message: 'Email sent successfully!', info });
  });
};


module.exports = { register ,login ,updateResource ,SendMail};
