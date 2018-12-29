//git update
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey('add send grid key');
router.use(bodyParser.urlencoded({ extended: false}));



router.post('/', function(req, res, next) {
  console.dir(req);
  //res.json(req.body.username);
  res.render('mail', {name: req.body.username});
  var user=req.body.username;
  var email=req.body.email;
  var phone=req.body.phone;
  var request=req.body.request;
  var department=req.body.department;
  var sev=req.body.sev;
  sendgrid.send({
    to: 'dennis.alonzo.johnson@gmail.com',					//receiver's email
    from: 'hd@hd.com',			//sender's email
    subject: "HD Request 1 - " + department + " " + sev, 				//Subject
    text: 'and finally' + user + 'test',		//content
    html: 'User: ' + user + '<br>'
     + 'Department: ' + department + '<br>'
     + 'Phone: ' + phone + '<br>'
     + 'Email: ' + email + '<br>'
     + 'Request: ' + request + '<br>',			//HTML content
  });
  //res.redirect('https://google.com');
});






module.exports = router;