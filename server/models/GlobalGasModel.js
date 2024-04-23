const mongoose = require('mongoose');

const GlobalGasDataSchema = new mongoose.Schema({
    totalrides: {type: Number,default: 0},
    totalBooking: {type: Number,default: 0},
    TotalDistance: {type: Number,default: 0},
    TotalFuelsaved: {type: Number, default: 0},
    CarbonDiOxide: {type: Number,default: 0},
    CarbonMonOxide: {type: Number,default: 0},
    NitrogenOxide: {type: Number,default: 0},
    HydroCarbons: {type: Number,default: 0},
    ParticularMatter: {type: Number,default: 0},
    SulphurDiOxide: { type: Number,default: 0},
    BenzeneEmission: {type: Number,default: 0}
});

const GlobalGas = mongoose.model('displaygas', GlobalGasDataSchema);

module.exports = GlobalGas;
