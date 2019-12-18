var express=require('express');
var pRouter=require('./routes/product');
var app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());
app.use("/product",pRouter);

app.listen(2323,()=>{
    console.log("server is listening on port 2323");
})