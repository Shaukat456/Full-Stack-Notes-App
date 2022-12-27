

const bodyParser = require('body-parser')
const express = require('express')
const cors= require("cors")
const postRoutes= require("./routes/posts")

const app= express();

app.use(bodyParser.json({limit:"30mb" , extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true }))
app.use(cors())

// all the routes in the post will start from /posts
app.use('/posts' ,  postRoutes)



app.listen(5000, ()=>{
    console.log("server started")
})