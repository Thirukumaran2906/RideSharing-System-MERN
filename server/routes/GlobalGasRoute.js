const express =require('express');
const router =express.Router();

const {findGlobalDataById,updateGlobalData} =require('../controllers/GlobalGasController')


router.get('/globaldata',findGlobalDataById);
router.post('/updateglobaldata',updateGlobalData);

module.exports=router