const express = require('express') //common js....sab kuch synchronously leke ata hai..agar import likha to package me types me module likh dena kyuki import modular js me ata hai aur vo code asynchronously lata hai
require('dotenv').config()
const app = express();


const port = process.env.PORT || 3000; //if port is available..else 3000

app.get('/',(req,res)=>{
    res.send("This is server from full stack connection ..backend folder")
    // res.send("Welcome to server")
    
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Why was the Indian restaurant so good at math?",
            content: "Because it knew how to samosa problems!"
        },
        {
            id: 2,
            title: "Why don't Indian vegetarians fight?",
            content: "Because they don't want to squash their problems!"
        },
        {
            id: 3,
            title: "Why did the cricket team go to the bank?",
            content: "To get their balance checked!"
        },
        {
            id: 4,
            title: "Why did the laptop break up with the smartphone?",
            content: "It couldn't handle all the chai-messages!"
        },
        {
            id: 5,
            title: "Why did the coconut break up with the banana?",
            content: "Because it found it too a-peeling!"
        },
        {
            id: 6,
            title: "What did the Bollywood movie say to the Hollywood movie?",
            content: "You may have the stars, but we have the dance moves!"
        },
        {
            id: 7,
            title: "Why did the dosa go to therapy?",
            content: "It had too many layers of issues to deal with!"
        },
        {
            id: 8,
            title: "Why did the school kids take laddoos to class?",
            content: "For a sweet subject break!"
        },
        {
            id: 9,
            title: "Why was the Delhi traffic light feeling stressed?",
            content: "It had too many stop and go issues!"
        },
        {
            id: 10,
            title: "Why did the Mumbai train feel important?",
            content: "Because it was always in high demand!"
        }
    ];
    
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`Our app is listening at ${port}`);
})