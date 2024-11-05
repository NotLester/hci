const router= require("express").Router();
const {response}=require("express");
const {create}=require("../models/Event");
let events = require("../models/Event");

router.route("/add").post((req,res) =>{
    
    const {eventName,authorName,eventDate,venue,time,description}=req.body;

const newEvent = new events({
    eventName,
    authorName,
    eventDate,
    venue,
    time,
    description
})
newEvent.save().then(()=>{
    res.json("Event Added")   
}).catch((err)=>{
    console.log(err);
})

})

router.route("/").get((req,res)=>{
    events.find().then((events)=>{
        res.json(events)
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/update/:id").put(async(req,res)=>{
    let eventId = req.params.id;
    const {eventName,authorName,eventDate,venue,time,description}=req.body;

    const updateEvent ={
        eventName,
        authorName,
        eventDate,
        venue,
        time,
        description
    }
    const update = await events.findByIdAndUpdate(eventId,updateEvent).then(()=>{

    res.status(200).send({status:"Event updated"});
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data",event:update});

})

})

router.route("/delete/:id").delete(async(req,res)=>{
    let eventId = req.params.id;
    
   await events.findByIdAndDelete(eventId).then(()=>{

    res.status(200).send({status:"Event Deleted"});
    }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with deleting data",error:err.message});

})

})

router.route("/get/:id").get(async(req,res)=>{
    let eventId=req.params.id;
    const event = await events.findById(eventId).then((event)=>{
        res.status(200).send({status:"Event fetched", event:event})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status:"Error with get details",error:err.message});
    })

})


module.exports=router;