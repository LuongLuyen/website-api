const User = require("../models/User")

const loginMiddleware = {
    // check login
    handleLogin: async (req,res,next)=>{
        try{
            const {username,password}= req.body
            console.log(username)
            const admin ={
                username:"admin123",
                password:"admin123"
            }
            if(username===admin.username && password===admin.password){
                const port=process.env.URL_CLIENT
                res.redirect(`${port}/content/upload`)
            }else{
                res.send(admin)
            }
            
        }catch(err){
            res.status(500).json(err)
        }
        next()
    }
}
module.exports = loginMiddleware
