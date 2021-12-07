const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
//const Product = require('./src/model/productmodel');
const bookdata = require('./src/model/bookdata');
//const bodyparser= require('body-parser');
const userdata = require('./src/model/userdata')
const app = new express();
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//app.use(body-parser.JSON());

app.get('/api/books',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
Bookdata.find()
.then(function(book){
    res.send(book);
})
})
app.post('/api/signup', function(req, res) {
    console.log(req.body)
    var signup = {
        email: req.body.email,   //in get method we use query instead of body
        password: req.body.password,  
      }
           var signupdata = userdata(signup);  
    signupdata.save(); //save to db
    res.send()
})
app.post('/api/login', function (req, res) {
     
    console.log(req.body);
    let userData = req.body
    var dbemail='admin';
    var dbpassword = '1234';
    
    // login check admin/user
    if (userData.email == 'admin' && userData.password == '12345') {
        // res.send({ status: true });
          let payload = {subject: dbemail+dbpassword}
          let admintoken = jwt.sign(payload, 'adminKey')
        res.send({ admintoken })
        console.log("admin loggedin")


    } else {
        userdata.findOne({ email:userData.email, password:userData.password }, function (err, user) {
            if (err) {
                res.send({ status: false, data: 'Response error. No Internet' });

            }
            else if (user) {
                console.log("user data", user)
            
                // res.send({ status: true });
                let payload2 = {subject: userData.email+userData.password}
                let usertoken = jwt.sign(payload2, 'userKey')
                res.send({ usertoken })
                console.log("userloggedin")

            } else {
                console.log("login failed")
                res.send();
                return false;
                
            }

        });
    }
});

            







// app.post('/insert',function(req,res){
//     console.log(req.body);
    
//     var products= {
//         productId:req.body.productId,
//         productName:req.body.productName,
//         availability:req.body.availability,
//         price:req.body.price,
//         starRating:req.body.starRating,
//         imageUrl:req.body.imageUrl,

//     }
//     var product= new Product(products);
//     product.save();
// })
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/libraryapp//index.html'));
});
 app.listen(3000);