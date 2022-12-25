const express=require('express');
const app=express();
const cors = require('cors');
const port=process.env.PORT ||5000;


//Middleware;
app.use(cors());
app.use(express.json());


const users=[
    {id:1,name:'Enamul',email:"enahaque79@gmail.com",phone:"017164991164"},
    {id:2,name:'babu',email:"enahaque79@gmail.com",phone:"017164991164"},
    {id:3,name:'babu2',email:"enahaque79@gmail.com",phone:"017164991164"},
    {id:4,name:'salmaEnam',email:"enahaque79@gmail.com",phone:"017164991164"},
    {id:5,name:'Enam',email:"enahaque79@gmail.com",phone:"017164991164"},
    {id:6,name:'shashi',email:"enahaque79@gmail.com",phone:"017164991164"},
    {id:7,name:'Godun',email:"enahaque79@gmail.com",phone:"017164991164"},
    
];

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/users',(req,res)=>{
    // console.log('query',req.query);
    // res.send(users);
    if(req.query.name){
        const search=req.query.name.toLowerCase();
        const matched=users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(matched);
    }else{
        res.send(users);
    }
});

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id=parseInt(req.params.id);
    // const user=users[id];
    const user=users.find(user=>user.id ===id);
    res.send(user);
});

app.post('/user',(req,res)=>{
    console.log('request',req.body);
    const user=req.body;
    user.id=users.length + 1;
    users.push(user);
    res.send(user);
});


app.listen(port,()=>{
    console.log('My app is running port 5000!!',port);
});
