const express =require('express');
const router =express.Router();

const { AddJourney ,findJourney,updateBookingStatus,updateUserArray ,findSingleJourney} =require('../controllers/AddRidesController')


router.post('/addjourney',AddJourney);
router.post('/findjourney', findJourney);

router.post('/updatestatus',updateBookingStatus)
router.post('/updateUserArray',updateUserArray)


router.post('/getsingle',findSingleJourney)

module.exports=router    