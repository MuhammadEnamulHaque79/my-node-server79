/*
1.Create a app(mkdir myapp);
2.cd myapp;
3.npm init;
4.npm install express --save;
5.Create index.js;
--------------------------------
For express/node server;
--------------------------------
1.const express=require('express');
2.const app=express();
3.const port=process.env.PORT||5000;
4.app.get('/',(req,res)=>{
    res.send('Hello World!!');
});
5.app.listen(port,()=>{
    console.log('My app is running on port 5000',port);
});

------------------------------
yarn global add nodemon
------------------------------
//Middleware;
1.npm install cors;
--------------------------


*/