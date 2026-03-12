const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main().then(()=>{console.log("connection successfull");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const allchats =[
    {
        from:"Shreyan",
        to:"Aditya",
        msg:"Send me your homework",
        created_at:new Date()
    },
    {
        from:"Abhradeep",
        to:"Anik",
        msg:"Are you a Girl ?",
        created_at:new Date()
    },
    {
        from:"Aditya",
        to:"Shreyan",
        msg:"Do it yourself.",
        created_at:new Date()
    },
    {
        from:"Sagnik",
        to:"Shreyan",
        msg:"Will you go to college tomorrow ?",
        created_at:new Date()
    },
    {
        from:"Shreyan",
        to:"Sagnik",
        msg:"NO",
        created_at:new Date()
    },
    {
        from:"Anik",
        to:"Ananya",
        msg:"Will you marry me ?",
        created_at:new Date()
    },
    {
        from:"Ananya",
        to:"Anik",
        msg:"It is only possible in your dreams.",
        created_at:new Date()
    },
    {
        from:"Abhradeep",
        to:"Anik",
        msg:"Are you alive",
        created_at:new Date()
    },
        {
        from:"Shreyan",
        to:"Aditya",
        msg:"Are you doing leetcode.",
        created_at:new Date()
    },
        {
        from:"Aditya",
        to:"Shreyan",
        msg:"No, I am loyal to codeforces",
        created_at:new Date()
    },
        {
        from:"Anik",
        to:"Abhradeep",
        msg:"Crack a joke",
        created_at:new Date()
    },
        {
        from:"Abhradeep",
        to:"Anik",
        msg:"Crack Yourself",
        created_at:new Date()
    },

];
Chat.insertMany(allchats).then((res)=>console.log(res));