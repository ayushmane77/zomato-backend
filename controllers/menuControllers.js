const Menu=require('../models/menuDB.js');
exports.getMenuById=(req,res)=>{
    const {resId} = req.params;
    Menu.find({
        restaurantId:resId
    })
    .then(response=>{
        res.status(200).json({
            message:"Menu fetched successfully",
            menu: response
        });
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
}

exports.getAllMenu=(req,res)=>{      // assignment no 5
   
    Menu.find()
    .then(response=>{
        res.status(200).json({
            message:"Menu fetched successfully",
            menu: response
        });
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        });
    });
}