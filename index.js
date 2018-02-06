const express=require('express');

const bodyParser=require('body-parser'); //before routes

const mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost:27017/friendsgo').then(()=>{
//   console.log('Connected to MongoDB');
// });

mongoose.connect('mongodb://mithuns14:12345678@ds125288.mlab.com:25288/mit-crud-api').then(()=>{
  console.log('Connected to MongoDB');
});



mongoose.Promise=global.Promise; 

const apiRoutes=require('./routes/api'); //after body parser
//set up express app

const app=express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/api',apiRoutes);

app.use((err,req,res,next)=>{
    res.send({error:err.message});
})

app.get('/',(req,res)=>{    
    res.send({message:'You are in Home Page'});
});




//listen for requests
app.listen(port,function(){
    console.log('now listening to '+port);
});