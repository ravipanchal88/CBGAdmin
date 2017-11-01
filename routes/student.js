var express = require('express');
var router = express.Router();

/* GET for unauthorized users  */


//Get for Home Page 
router.get('/addstudent', function(req, res, next) {
    console.log("on student page");
    res.render('student/addstudent',{ title :' express student page'});

});


module.exports = router;
