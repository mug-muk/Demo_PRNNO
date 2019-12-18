var express=require('express');
var mysql=require('mysql');
var config=require('config');
var router=express();

var connection=mysql.createConnection({
    host:config.get("host"),
    port:config.get("port"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password")
})

connection.connect();
router.use(express.json());

router.get("/",(request,response)=>{
    var queryText="select * from product";
    connection.query(queryText,(err,result)=>{
        if(err==null)
        response.send(JSON.stringify(result));
        else 
        response.send(JSON.stringify(err));

    })
})

module.exports=router;