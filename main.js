const express = require("express")

const app = express()

app.use(logger);


app.get("/books", function(req, res){

    res.send({route:"/books"});
})

app.get("/authors", function(req, res){
    res.send({route:"authors", permission: true});
})

app.get("/libraries", function(req, res){
    res.send({route:"libraries", permission: true});
})



function logger(req,res,next){
    console.log("before loger")
    next()
}

app.listen(1000,()=>{
    console.log("listening port 1000")
})