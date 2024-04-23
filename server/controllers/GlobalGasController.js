const GlobalGas = require('../models/GlobalGasModel');

const findGlobalDataById = async (req, res) => {
    const id = req.body.id;

    try {
        const globalData = await GlobalGas.findById("65d5481116f06477cf1e4ca7");
        
        if (!globalData) {
            return res.status(404).json({ message: 'Global gas data not found' });
        }
        
        return res.status(200).json(globalData);
    } catch (err) {
        return res.status(500).json({ message: 'server error', error: err });
    }
};
const updateGlobalData =(req,res)=>{

}

module.exports = {findGlobalDataById,updateGlobalData};
