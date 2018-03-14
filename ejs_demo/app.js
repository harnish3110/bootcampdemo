var express = require("express");

var app = express();

// Search for static files like css and js in public directory
app.use(express.static('public'));

// Not to append .ejs with every render
app.set('view engine','ejs');

//Routes
app.get('/', function(req,res){
    res.render('home')
});

app.get('/fallinlovewith/:thing',function(req,res){
    var thing  = req.params.thing;
    res.render('love', {thingVar: thing});
    
})

app.get('/posts',function(req, res) {
    var posts = [
        {title:'Post1', author: 'harnish'},
        {title:'hello', author: 'shah'},
        {title:'Black', author: 'knight'}
    ];
    res.render('posts',{posts:posts});
})

//Starting of server
app.listen(process.env.PORT,process.env.IP,function(){
    console.log('Server Started');
});