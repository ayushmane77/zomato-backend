const mongoose=require('mongoose');
const schema=mongoose.Schema;
const locationSchema=new schema({
    
    locations:{
        type:String,
        Required:true
    }
});
module.exports=mongoose.model('location',locationSchema,'locations');
