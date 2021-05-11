const express=require("express");
const app=express();
const fs=require("fs");
const axios = require("axios");
const { response } = require("express");
const port=3000;

let content;
const readFile = () => {
    fs.readFile("./data.txt",(err,data)=>{
      if (err){
        throw err;
      }
      content=data.toString();
      console.log(content);
    });
    
  };
  readFile()

  const writeFile = () => {
    fs.writeFile("./text.txt",`A new file has been created`,(err)=>{
      if (err){
        throw err;
      }
     
      console.log('A new file has been created');
    });
  };
  writeFile()
// ***********************************************************
const getPost = (id) => {
    app.get('/id',(req,res)=>{
     console.log("git successfully")
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        
     .then((response)=>{
          console.log('DATA:', response.data);
         res.json(response.data)
     })
      .catch((err)=>{
          throw err;
      })



    });
  };
  getPost(1);
  getPost(50);






app.listen(port,()=>{
    console.log(`server run on port ${port}`);
});