import mongoose from 'mongoose' ; 


// direct message will be a channel or group with only two people in it 
const DirectMessageSchema = new  mongoose.Schema({
    user1: {
        type: mongoose.Types.ObjectId , 
        ref: 'User' ,
    } , 
    user2 : {
        type: mongoose.Types.ObjectId , 
        ref: 'User' ,
    } , 
    channel : {
        type: mongoose.Types.ObjectId , 
        ref: 'Channel' , 
    }
} , {
    timestamps :true
}) ; 

const DirectMessage = mongoose.model("DirectMessage" , DirectMessageSchema) ; 

export default DirectMessage ; 

