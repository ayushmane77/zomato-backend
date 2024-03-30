const users=require('../models/UsersDB.js');
const bcrypt=require('bcrypt');
exports.postSignUp=async(req,res)=>{
    const {email,password,name} = req.body;
    const existingUser=await users.findOne({email});
    if(existingUser){
        return res.status(400).json({ message: "User already exists with this email" });
    }
    
    const userObj=new users({
        email,
        password,
        name
    });
    userObj.save()
    .then(response=>{
        res.status(200).json({
            message:"user details saved successfully",
            newUser:response
        });
    })
    .catch(err=>{
        res.status(500).json({
            message:"user is not created",
            error:err
        });
    });
    
    
}

exports.userLogin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await users.findOne({email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful" });
    }

    catch(error){
        console.log(error);
    }









   
    // users.find({
    //     name,
    //     password
    // })
    // .then(response=>{
    //     if(response.length>0){
    //         res.status(200).json({
    //             message:"user authenticated",
    //             loggedInUser:response,
    //             isAuthenticated:true
    //         });
    //     }
    //     else{
    //         res.status(200).json({
    //             message:"user details not found",
    //             isAuthenticated:false
    //         });
    //     }
    // })
    // .catch(err=>{
    //     res.status(500).json({
    //         message:"Invalid username or password",
    //         error:err
    //     });
    // });
}