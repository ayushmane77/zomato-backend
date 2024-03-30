const allrestuarants=require('../models/restuarantsDB.js');

exports.filterRestuarants=(req,res)=>{
    let {location,mealtype,lcost,hcost,cuisine,sort,page}=req.body;

    sort=sort? sort:1;  // 1-> Ascending order ,  -1 -> descending order

    page=page? page:1; // if no page is specified then by default page 1 will be selected

    const itemPerPage=2;
    const startIndex=page * itemPerPage - itemPerPage;
    const endIndex=page * itemPerPage;

    var filterObj={};

    // true and true is true
    location && (filterObj["city"]=location);
    // so the empty object is now filled with the new data as {"city":location}
    mealtype && (filterObj["type.mealtype"]=mealtype)

    lcost && hcost && (filterObj["cost"]={$gte:lcost,$lte:hcost});

    cuisine && (filterObj[cuisine.cuisine]={$in:cuisine});

    allrestuarants.find(filterObj).sort({cost:sort})
    .then(response=>{
        const filteredResponse=response.slice(startIndex,endIndex)
        res.status(200).json({
            message:"restuarants fetched by restuarant ID successfully",
            Restuarants:filteredResponse
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getAllRestuarants=(req,res)=>{
    allrestuarants.find()
    .then(response=>{
        res.status(200).json({
            message:"restuarants fetched successfully",
            Restuarants:response
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getRestuarantsByCity=(req,res)=>{        // assignment no 5
    const {cityName}=req.params;
    allrestuarants.find({city_name:cityName})
    .then(response=>{
        res.status(200).json({
            message:"restuarants  city fetched  successfully",
            Restuarants:response
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getRestuarantsByLocationId=(req,res)=>{
    const {locID}=req.params;
    allrestuarants.find({city:locID})
    .then(response=>{
        res.status(200).json({
            message:"restuarants fetched by location ID successfully",
            Restuarants:response
        });
    })
    .catch(err=>{
        console.log(err);
    })
}



exports.getRestuarantsId=(req,res)=>{
    const {id}=req.params;
    allrestuarants.findById(id)
    .then(response=>{
        res.status(200).json({
            message:"restuarants fetched by restuarant ID successfully",
            Restuarants:response
        });
    })
    .catch(err=>{
        console.log(err);
    })
}


