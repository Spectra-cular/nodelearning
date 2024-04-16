
const express=require('express');
const app=express();

//app.use(express.static(__dirname+'/dist/'));


app.get('/',(req,res)=>{
    res.send("Hey Hi")
})

app.listen(3000,()=>{
    console.log("Server hast started at portnumber 3000")
})
