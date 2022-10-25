const User = require("../models/User")

const loginMiddleware = {
    // check login
    handleLogin: async (req,res,next)=>{
        try{
            const {username,password}= req.body
            const user = await User.findOne({ username })
            const pass = await User.findOne({ password})
            if(username===user && password===pass){
                const port='https://luongluyen-film-client.netlify.app'
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
