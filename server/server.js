const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors');
const UserRoutes=require('../server/routes/RegisterRoute')
const AddJourneyRoutes=require('../server/routes/AddRidesRoute')
const GlobalGas=require('../server/routes/GlobalGasRoute')
app.use(cors())
app.use(express.json())
try {
    mongoose.connect('mongodb://localhost:27017/carpool');
} catch (error) {
    console.log("cannot connect database")
}
app.use('/',UserRoutes,AddJourneyRoutes,GlobalGas)

app.listen(3001, () => {
    console.log('Server started');
});

