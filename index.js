const express = require("express")

const app = express()

app.use(logger);


app.get("/books", function(req, res){

    res.send({route:"/books"});
})

app.get("/authors", checkPermission("author"),function(req, res){
    res.send({route:"authors", permission: true});
})

app.get("/libraries", checkPermission("librarian"),function(req, res){
    res.send({route:"libraries", permission: true});
})

function checkPermission(librarian){
    return function logger(req,res,next){
        if(libraries === "librarian"){
            return next()
        }
        return res.send("Not allowed")
    }
   
}
function checkPermission(author){
    return function logger(req,res,next){
        if(user === "author"){
            return next()
        }
        return res.send("Not allowed")
    }
   
}

function logger(req,res,next){
    console.log("before loger")
    next()
}

app.listen(2000,()=>{
    console.log("listening port 2000")
})