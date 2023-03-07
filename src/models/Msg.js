const mongoose =require("mongoose")

const Schema = new mongoose.Schema({
    sender:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required: true
    }
},{timestamps:true}

)

module.exports= mongoose.model("Msg", Schema)