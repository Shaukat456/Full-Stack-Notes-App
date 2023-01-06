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
    const {id  }  = req.params
    // id="63ad9ad8d8406781af6e8982"
    const post= req.body
            try{
           const response= await PostMessage.findByIdAndUpdate(id ,post , {new:true})
           return res.send(`has been updated ${response}`)
            }
            catch(err){  
                res.status(404).send(err)
                console.log("err" , err)    
            }
   }

   module.exports = { getPost , CreatePost , UpdatePost}