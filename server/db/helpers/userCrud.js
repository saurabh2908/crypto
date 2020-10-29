const Model = require('../models/userSchema');
const userModel = Model;

const userOperation = {
    signup(userObject,response)
    {
        console.log(response);
        console.log(userObject);
        userModel.create(userObject,(err,doc)=>{
            if(doc){
                response.json({message: "user is there"});
            }else{
               response.json({message:"Invalid user name or pwd"});
            }
        })
    },
    login(userObject,response)
    {
        userModel.find(userObject,(err,doc)=>{
            if(doc){
                response.json({message: "mill gya"});
            }else{
               response.json({message:"Invalid user name or pwd"});
            }
        })

    }
}

module.exports = userOperation;