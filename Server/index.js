

const bodyParser = require('body-parser')
const express = require('express')
const cors = require("cors")
const postRoutes = require("./routes/posts");
const { default: mongoose, mongo } = require('mongoose');
const dotEnv=require('dotenv')



const app = express();
mongoose.set('strictQuery', false);
app.use(bodyParser.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


mongoose.connect('process.env.DB_USER', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((res) =>
    console.log('Connected to Database')
).catch((e) => {
    console.log("error ::", e)
})

// all the routes in the post will start from /posts
app.use('/posts', postRoutes)



app.listen(5000, () => {
    console.log("server started")
})