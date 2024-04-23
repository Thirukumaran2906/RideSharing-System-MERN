const express =require('express');
const router =express.Router();


const { register , login ,updateResource,SendMail} =require('../controllers/RegisterController')

router.post('/adduser',register);
router.post('/login',login);
router.post('/updateresource', updateResource)

router.post('/sendmail',SendMail)


module.exports=router