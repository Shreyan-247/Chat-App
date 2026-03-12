const express = require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose = require('mongoose');
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

main().then(()=>{console.log("connection successfull");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.listen(port,()=> {
    console.log(`LISTENING TO PORT : 8080`);
});

app.get("/",(req,res)=>{
    res.send("Working");
});

app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    res.render("chats.ejs",{ chats });
});

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let chat1=new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    chat1.save();
    res.redirect("/chats");
});
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let [chat]=await Chat.find({_id:id});
    res.render("edit.ejs",{chat});
});
app.post("/chats/:id",async(req,res)=>{
    let {msg}=req.body;
    let {id}=req.params;
    await Chat.updateOne({_id:id},{msg:msg});
    res.redirect("/chats");
});
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    await Chat.deleteOne({_id:id});
    res.redirect("/chats");
});

