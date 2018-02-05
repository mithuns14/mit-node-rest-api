const express=require('express');
const router=express.Router();
const Friend=require('../models/friends');


//get list of friends from DB.
router.get('/friends',(req,res,next)=>{
    
        Friend.find().then((friend)=>{
            res.send(friend);
        });
});

//add a new friend to DB.
router.post('/friends',(req,res,next)=>{
    //console.log(req.body);
    // var friend=new Friend(req.body);
    // friend.save();

    Friend.create(req.body).then((friend)=>{
        // res.send({
        //     type:'POST',
        //     name:req.body.name,
        //     age:req.body.age
        // });
        res.send(friend);
    }).catch(next); //save auto

 
});

//update a friend in the DB.
router.put('/friends/:id',(req,res,next)=>{
    Friend.findByIdAndUpdate({
        _id:req.params.id
    },req.body).then((friend)=>{
        Friend.findOne({
            _id:req.params.id
        }).then((friend)=>{
            res.send(friend);
        })
       
    })
});

//delete a friend from DB.
router.delete('/friends/:id',(req,res,next)=>{
    Friend.findByIdAndRemove({_id:req.params.id}).then((friend)=>{
        res.send(friend);
    });
    //res.send({type:'DELETE'});
});

module.exports=router;