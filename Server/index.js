

const bodyParser = require('body-parser')
const express = require('express')
const cors = require("cors")
const PORT = 5000 || process.env.PORT 
const postRoutes = require("./routes/posts");
const { default: mongoose, mongo } = require('mongoose');
const dotEnv = require('dotenv')


dotEnv.config()


mongoose.set('strictQuery', false);

const app = express();
app.use(bodyParser.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



// console.log(process.env.DB_USER)

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(e => console.log('Connected to Database')).catch(e => console.log("error ::", e))


// all the routes in the post will start from /posts
app.use('/posts', postRoutes)





app.listen(5000, () => {
    console.log("server started")
})