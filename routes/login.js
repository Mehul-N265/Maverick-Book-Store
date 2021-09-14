const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.render('login',{ title: 'Maverick Book Store| Login' })
});
router.get('/register',(req,res,next) =>{
    res.render('register',{ title: 'Maverick Book Store| Register' })
});
///posting
router.post('/',(req,res,next) =>{
    res.status(201).send(req.body.user)
})
module.exports = router;
