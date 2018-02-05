const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create friends Schema & Model

const FriendsSchema=new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    age:{
        type:Number,
        required:[true,'Age field is required']
    },
    available:{
        type:Boolean,
        default:false
    }

    //add geolocation
});

const Friends=mongoose.model('friends',FriendsSchema);

module.exports=Friends;