const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const restuarantsSchema=new Schema({
    
    name:{
        type:String,
        Required:true
    },
    city:{
        type:Number,
        Required:true
    },
    id:{
        type:Number,
        Required:true
    },
    city_name:{
        type:String,
        Required:true,
    }
});
module.exports=mongoose.model('restuarant',restuarantsSchema,'restuarants');