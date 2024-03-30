const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const schema=mongoose.Schema;
const usersSchema=new schema({
    email:{
        type:String,
        Required:true
    },
    password:{
        type:String,
        Required:true
    },
    name:{
        type:String,
        Required:true
    }
});
usersSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
  });
module.exports=mongoose.model('account',usersSchema,'user');