var express = require('express');
var router = express.Router();
sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey('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');

sendgrid.send({
  to: 'dennis.alonzo.johnson@gmail.com',					//receiver's email
  from: "dennis.alonzo.johnson@gmail.com",			//sender's email
  subject: 'HD Track-It',				//Subject
  text: 'Shit work yo'		//content
}, function(err, json){
  if (err) { return console.error(err);}
  console.log(json);
});


router.post('/', function(req, res, next) {
  console.dir(req);
  //res.json(req.body.username);
  res.render('mail', {name: req.body.username});
});




module.exports = router;