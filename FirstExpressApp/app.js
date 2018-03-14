var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send('Hi There');
});
app.get('/bye',function(req,res){
   res.send('BYE!!!');
});
app.get('/dog',function(req,res){
   res.send('WOOOF!!!');
});
app.get('/name/:myName',function(req, res) {
    console.log(req.params);
    res.send('You are on the Pathe vaiable ' + req.params.myName.toUpperCase());
});

//The order always matters!!.
//For all routes which are not found and thsi should be always at the end.
app.get('*',function(req, res) {
    res.send('No Route Found');
});


app.listen(process.env.PORT, process.env.IP,function(){
    console.log('Server Started at ' + process.env.PORT +' ' + process.env.IP);
});