import express from 'express'

const postRoutes= express.Router();

// inheriting the /posts routes 
postRoutes.get('/',(req,res)=>{
    res.send("post get route")
})



export default app;