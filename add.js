var express = require('express')
var bodyparser = require('body-parser')
const formidable = require('formidable')
const fs = require('fs')


var app = express() //server 

app.use(bodyparser.urlencoded({
    extended : true
}))
/*app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render("create")
})*/
app.get("/", function(req,res){
res.sendFile(__dirname+ "/add2.html")
})
app.post("/",function(req,res){
 var a=Number(req.body.value1)
 var b=Number(req.body.value2)
 var option=Number(req.body.option)
 if(option==1){ 
 res.send("<body style='background-color:blue;color:white'><h1 style='margintop:300px'><center>Addition of "+a +" and "+ b +" is " + (a+b)+"</center></h1></body>")
 }
 else if(option == 2){
 res.send("<body style='background-color:blue;color:white'><h1 style='margintop:300px'><center>Subtraction of "+a +" and "+ b +" = " + (a-b)+"</center></h1></body>")
 }
 else if(option == 3){
 res.send("<body style='background-color:blue;color:white'><h1 style='margintop:300px'><center> Multiplication of "+a +" and "+ b +" = " + (a*b)+"</center></h1></body")
 }
 else if(option == 4){
 res.send("<body style='background-color:blue;color:white'><h1 style='margintop:300px'><center>Division of "+a +" and "+ b +" = " + (a/b)+"</center></h1></body>")
 }
 else if(option == 5){
 res.send("<body style='background-color:blue;color:white'><h1 style='margintop:300px'><center>Modules of "+a +" and "+ b +" = " + (a%b)+"</center></h1></body>")
 }
 else{
 res.send("invalid action")
 }
})
app.listen(3005, function(){
console.log("server iniitated on 3005")
}) 