const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');


app.use('/public',express.static(path.join(__dirname,'/public')))
app.set('views', path.join(__dirname, '/views')); 

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let person =[{
    fname: "firstname",
    lname: "lastname",
    mobile:"enter mobile number",
    email: "enter E-Mail"
}
]
let users=[{
    fname:"fname",
    lname : "lname",
    mobile: "482529528",
    email :"rock@gmail.com",
    confirmEmail:"rock@gmail.com",
    password:"*****"
},{
    fname:"fname",
    lname : "lname",
    mobile: "482529528",
    email :"rock@gmail.com",
    confirmEmail:"rock@gmail.com",
    password:"*****"
}]

app.post('/add',(req,res)=>{

 const newPerson = {
     fname : req.body.fname,
     lname : req.body.lname,
     mobile: req.body.mobile,
     email : req.body.email
    }

 person.push(newPerson);
   res.redirect('/');
 
});
app.get('/login',(req,res)=>{
    res.render('login');
});

app.post('/login',(req,res)=>{
    console.log(req.body);
    const newLogin={
        email:req.body.email,
        password:req.body.password
    }
  console.log(newLogin.email)

    users.push(newLogin);
    res.redirect('/');
    
});

app.get('/signup',(req,res)=>{
    res.render('signup');
});

app.post('/signup',(req,res)=>{
   
    // console.log(req.body);
    // const newUser={
    // fname :req.body.fname,
    // lname :req.body.lname,
    // mobile: req.body.mobile,
    // email :req.body.email,
    // confirmEmail:req.body.confirmEmail,
    // password:req.body.password

    // }
    // users.push(newUser);

    // res.redirect('/')
    const newUser={
        fname :req.body.fname,
        lname :req.body.lname,
        mobile: req.body.mobile,
        email :req.body.email,
        confirmEmail:req.body.confirmEmail,
        password:req.body.password
    
        }
        users.push(newUser);
    
        
    if(users.email===newUser.email){
        res.send('this email is exixsting')
    }
        else{
            res.redirect('/')
        }
   
});

app.get('/',  (req, res)=> {
    res.render('index' ,{person:person, users:users})
});

app.listen(port)