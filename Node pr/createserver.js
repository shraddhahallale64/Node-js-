const express=require('express')

const app=express()

app.get('/', function(req,resp)
{ resp.send("hello")
})

/*app.get('/insert', function(req,resp){
console.log("In insert ")

resp.send("hello insert")
});*/

app.get('/insert/:id',function(req,resp){

const id=req.params.id

resp.send("id is "+id)
})


/*app.get('/insert', function(req,resp)
{
     console.log("in insert abc")
     const abc=req.query.abc
     resp.send("data is "+abc)

});*/
app.listen('8080',function(err){
     console.log("server started")
})