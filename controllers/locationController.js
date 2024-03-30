const LocationsData=require('../models/locationsDB.js');
exports.getLocations=(req,res)=>{
    LocationsData.find()
    .then(response=>{
        res.status(200).json({
            message:"locations fetched succesfully",
            locations:response
        });
    })
    .catch(err=>{
        res.status(500).json({
            message:"cannot fetch location data"
        });
    });
}