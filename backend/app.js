const express = require('express');
const bodyParser =require("body-parser")
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
   ); 
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
      );
    next();

})

app.post("/api/posts",(req,res,next)=>{
const post=req.body;
console.log(req.body);
res.status(201).json({
message:'post added successfully'
});



});


app.use("/api/posts",(req,res,next)=>{

const posts=[{
  id:'kjkjikjkoi',
  title:'first',
  content:'cnten1'
},
{
  id:'klkkkjkjikjkoi',
  title:'2first',
  content:'2cnten1'
}]


  res.status(200).json({
    message:'msg fecthed succesfully',
    posts:posts
  });
});
module.exports=app;



