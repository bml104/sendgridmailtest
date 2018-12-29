var express = require('express');
var router = express.Router();
sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey('add sendgrid key');

/* GET users listing. */
router.get('/', function(req, res) {

sendgrid.send({
  to: 'test@gmail.com',					//receiver's email
  from: "test@gmail.com",			//sender's email
  subject: 'HD Track-It',				//Subject
  text: 'Shit work yo'		//content
}, function(err, json){
  if (err) { return console.error(err);}
  console.log(json);
});
res.send('mail route');

});
router.post('/', (req,res) => {
  res.send('stuff');
});




module.exports = router;
