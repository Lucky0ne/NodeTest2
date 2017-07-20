/**
 * Created by sasmb on 19.07.2017.
 */
var express=require('express');
var bodyParser=require('body-parser');
var MongoClient=require('mongodb').MongoClient;
var ObjectId=require('mongodb').ObjectID;
const URL=require('url');
var db=require('./db.js');
var artistsController=require('./controllers/artists');
var app= express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.all('*',function(req,res){
//   console.log(req.originalUrl);
//})

app.get('/', function(req,res) {
    res.send('Hello API');
})

app.get('/artists',artistsController.all);
app.get('/artists/:id',artistsController.findById);
app.post('/artists',artistsController.create);
app.put('/artists/:id',artistsController.update);
app.delete('/artists/:id',artistsController.delete);

db.connect('mongodb://localhost:27017/myapi',function(err) {
   if (err) {
     return console.log(err);
   }
    app.listen(3005,function () {
    console.log('API app started succesefully');

    console.log( );
})
})