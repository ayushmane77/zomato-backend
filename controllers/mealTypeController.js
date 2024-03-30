const mealtypes=require('../models/mealTypesDB');
exports.getAllMealTypes=(req,res)=>{
    mealtypes.find()
    .then(response=>{
        res.status(200).json({
            message:"fetched mealtypes data successfully",
            MealTypes:response
        });
    })
    .catch(err=>{
        res.status(500).json({
            message:"cannot read mealtypes data",
            Error:err
        });
    });
}