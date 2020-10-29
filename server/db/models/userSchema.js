const mongoose = require('../connection');
const Schema = mongoose.Schema;
// console.log(mongoose.Schema);
const userSchema = new Schema(
    {
       
        'email': { type: String, unique: true, required: true },
        'name': { type: String,},
        'pass': { type: String, required: true }
    }
)

const userModel = mongoose.model('maners',userSchema);

module.exports = userModel;