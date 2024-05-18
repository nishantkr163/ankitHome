const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title:String,
    description:String,
    quantity:String,
    price:Number,
    category:String,
    buyer:String,
    status:Boolean,
    startDate:Date,
    endDate:Date,
},{
    versionKey:false
})


const TodoModel =  mongoose.model("homeTodo",TodoSchema);

module.exports =(TodoModel)