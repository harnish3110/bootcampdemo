var express = require("express");

var app = express();

app.get('/', function(req,res){
    res.send('Hi there, welcome to my assignment');
});

app.get('/speak/:animal',function(req,res){
    var animal = req.params.animal;
    console.log(animal);
    if(animal==='pig')
        res.send('The '+ animal +  ' says oink');
    else if(animal==='cow')
        res.send('The '+ animal +  ' says moo');
    else if(animal==='dog')
        res.send('The '+ animal +  ' says Woof Woof');
    else 
        res.send('The '+ animal +  ' is not in the database');
});

app.get('/repeat/:word/:num', function(req, res) {
   var word = req.params.word;
   var num = req.params.num;
   var messase = '';
   for(var i = 0; i<num;i++){
       messase+=word+' ';
   }
   console.log(messase);
   res.send(messase);
});

app.get('*',function(req, res) {
    res.send('No Routes found');
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log('Server Started');
});