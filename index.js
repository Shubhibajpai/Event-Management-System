const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel =require('./models/users')
const ContactModel =require('./models/contact')
const BookingModel = require('./models/booking')


const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/EventEase")

app.post('/register',(req,res) => {
    console.log("hello")
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.post('/contact',(req,res) => {
    // console.log("hello")
     ContactModel.create(req.body)
    .then(contactus=> res.json(contactus))
    .catch(err=> res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if(user.password===password){
                res.json("Success")
            } else {
                res.json("The Password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    }) 
})
app.post('/BookNow',(req,res)=>{
    console.log("hello")
    BookingModel.create(req.body)
    .then(persons=>res.json(persons))
    .catch(err=>res.json(err))
})


app.listen(3001,()=>{
    console.log("Server is running ");
})