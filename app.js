const express = require('express');
const app=express();
const port=3000;
const path = require('path');
const Filename=path.join(__dirname+"/src");

app.use(express.static(Filename));
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render('index');
    
});
app.get("/webform",(req,res)=>{
   res.render('form2');
});
app.get('/heiring',(req,res)=>{
    res.render("header");

});










app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})