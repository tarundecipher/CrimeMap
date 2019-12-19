var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine','ejs');



app.get("/",function(req,res){
    res.render('home');
   
});





app.listen(process.env.PORT,process.env.IP,function(){
    console.log('SERVER STARTED');
})