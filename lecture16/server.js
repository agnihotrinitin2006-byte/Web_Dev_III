const express =require("express");
const app =express();
const PORT=3000
const logMiddleware=(req,res,next)=>{
    req.data="this is from the middleware data"
    console.log("Request url:",req.url,"Method:",req.method,);
    // res.send("mujhe nhi bhejna aage")
    next();
}


const apiMiddleware=(req,res,next)=>{
    const API_KEY=req.query.API_KEY;
    if(API_KEY!=="1234"){
        res.send("API KEY IS NOT VALID")
    }
    console.log("authenthicated")
    next();
}

app.use(logMiddleware);
app.use(apiMiddleware);



app.get("/",(req,res)=>{
    console.log("Requestdata:",req.data)
    console.log("Homepage")
    res.send("Hello From Server")
})


app.get("/weather-data",(req,res)=>{
    console.log("Weather Data")
    res.json({
        city:"Delhi",
        weather:"Sunny",
        temp:32
    })
})


app.listen(PORT,()=>console.log("server is running on port 3000"));