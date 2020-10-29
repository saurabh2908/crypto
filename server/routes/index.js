var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = "my vision is strong";
const bcrypt = require('bcrypt');
const saltAround = 10;
const passwordValidator = require('password-validator');
const schema = new passwordValidator();
const userCrud = require('../db/helpers/userCrud');

const userSchema = require('../db/models/userSchema'); 


router.post('/signup', (req, res) => {

  const json = req.body;
  console.log("i am here in signup route")
  console.log("+++++++", json);
  let userData = {}
  userData.email = json.email
  userData.name = json.name
  if (json.email, json.pass) {
    bcrypt.genSalt(saltAround, (err, salt) => {
      if (err) {
        console.log("in signup bycrypt routing ", err);
        res.status(400), json({ error: err })
      } else {
        console.log("aa gya");
        validatePassword(json.pass).then(resp => {
          console.log(resp);
          bcrypt.hash(json.pass, salt).then((hash) => {
            userData.pass = hash;
            let user = new userSchema(userData)

            user.save(function (err, registeredUser) {
              console.log("i am in save")
              if (err) {
                res.status(400).json({
                  error: err
                });
              } else {
                res.status(200).json({
                  opration: true,
                  result: registeredUser
                })
              }
            })
            console.log("my user data", userData)
          })
        }).catch(err=>console.log(err))
      }
    })
  }


})




schema
  .is().min(8)
  .is().max(20)
  .has().lowercase()
  .has().not().spaces()
  .is().not().oneOf(['password', 'passw0rd', 'Password123'])

function validatePassword(pass) {
  return new Promise((resolve, reject) => {
    var error = schema.validate(pass, { list: true })
    if (error.length > 0) {
      reject(error)
    }
    else {
      resolve({ opration: true })
    }
  })
}

router.post('/signIn', (req, res) => {
  const json = req.body;
  console.log("i ma in login route",req.body);
  userSchema.findOne({ email: json.email }, (err, user) => {
    console.log("i am in");
    if (err) {
      console.log(" not found")
      res.status(400).json({ message: "user not found", err });
    }
    else {
      console.log("user in bycrypt",user)
      if(user==null){
        res.status(400).json({ message: "user not found", err });
      }
      else if (user) {
       
        bcrypt.compare(json.pass, user.pass, (err, resp) => {
          console.log("========", json.pass, "and ", user.pass);
          if (err) {
            res.status(400).json({
              error: err
            })
          }

          else {
            if (resp) {
              let payload = {
                user: user.email,
                password:user.pass
              }
              jwt.sign(payload, secretKey, (err, token) => {
                if (err) {
                  console.log("error is", err);
                  res.status(404).json(({ message: "error is", err }))
                }
                else {
                  
                  res.status(200).json({ message: token })
                }
              })
            }
          }
        })
      }
    }
  })
});
module.exports = router;
