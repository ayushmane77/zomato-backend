const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const mealTypeSchema=new Schema({
    name:{
        type:String,
        Required:true
    } 
});
module.exports=mongoose.model('meals',mealTypeSchema,'mealType')