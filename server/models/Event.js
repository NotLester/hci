const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName :{
        type : String,
        required: true
    },
    authorName :{
        type : String,
        required: true
    },
    eventDate:{
        type: Date,
         
    },
    venue:{
        type:String,
        required:true
     
    },
    time:{
        type:Date,
    },
    description:{
        type:String,
    }
    

}
);
const events = mongoose.model("event",eventSchema);
module.exports=events;