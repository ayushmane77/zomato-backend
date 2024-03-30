const express=require('express');
const mongoose=require('mongoose');
const route=require('./routes/index.js')
const app=express();
const port=6000;
app.use(express.json());
app.use('/',route);

// atlas connection string

const atlasConnection="mongodb+srv://ayushmane1145:pkdmz6crFSuDIMOz@cluster0.ox1k2te.mongodb.net/zomato-backend?retryWrites=true&w=majority&appName=Cluster0";


app.get('/',(req,res)=>{
    res.end("hello there");
});

mongoose.connect(atlasConnection,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(response=>{
    app.listen(port,()=>{
        console.log(`server is running on port: ${port}`);
    });
})
.catch(err=>{
    console.log(err);
});

