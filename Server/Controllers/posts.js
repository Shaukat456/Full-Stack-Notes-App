const PostMessage = require("../models/postMessage")

 const getPost=async(req,res)=>{
            try{
                const GetData = await PostMessage.find();
                res.status(200).send(GetData)
            }
            catch(err){  
                res.status(404).send(err)
                console.log(err)
            }
   }
 const CreatePost=async(req,res)=>{
    const {body }  = req
            try{
                let Create = new PostMessage(req.body);
               Create=  await Create.save()
                res.status(200).send(Create )
                console.log(`Post Created ${Create}`)
            }
            catch(err){  
                res.status(404).send(err)
                console.log("err" , err)
            }
   }
 const UpdatePost=async(req,res)=>{
    const {body }  = req
            try{
               
            }
            catch(err){  
                res.status(404).send(err)
                console.log("err" , err)
            }
   }

   module.exports = { getPost , CreatePost , UpdatePost}