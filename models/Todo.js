const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required : true
    },
    image :{
        type:String
    },
    creator :{
        type : mongoose.Schema.Types.ObjectId, ref:"User"
    },
});


module.exports = mongoose.model('Todo', TodoSchema);
