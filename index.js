const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');


app.use('/public',express.static(path.join(__dirname,'/public')))
app.set('views', path.join(__dirname, '/views')); 

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let person = [{
    firstname : "noor",
    lastname: "nabiji"

}]
app.get('/',  (req, res)=> {
    res.render('index' ,{person:person})
  })

app.post('/',(req,res)=>{
    var per = {
    firstname : req.body.fname,
    lastname : req.body.lname
}
person.push(per)
console.log(req.body);
res.redirect('/')

// res.json(req.body)

});

app.listen(port)