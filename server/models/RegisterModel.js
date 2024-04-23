const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: { type: String },
    Email: { type: String },
    Password: { type: String },
    Number: { type: Number },
    Gender: { type: Number }, // 1 means male && 0 means female
    Address: { type: String },
    IdProofNumber:{type :String},
    Photo: [],
    IdProof: [],
    ResourceSaved: {
        CarbonDiOxide: { type: Number, default: 0 },
        CarbonMonOxide: { type: Number, default: 0 },
        NitrogenOxide: { type: Number, default: 0 },
        HydroCarbons: { type: Number, default: 0 },
        ParticularMatter: { type: Number, default: 0 },
        SulphurDiOxide: { type: Number, default: 0 },
        BenzeneEmission: { type: Number, default: 0 }
    },
    RideTravelled: [], // browsed the journey and booked
    JourneyBooked: [], // has a car booking a journey
    TotalRides: { type: Number, default: 0 },
    TotalBooking: { type: Number, default: 0 },
    TotalDistance: { type: Number, default: 0 },
    TotalFuelsaved: { type: Number, default: 0 }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
