import express from 'express'
import postRoutes  from './routes/post' 
const app= express();


// all the routes in the post will start from /posts
app.use('/posts' ,  postRoutes)



app.listen(500, ()=>{
    console.log("server started")
})