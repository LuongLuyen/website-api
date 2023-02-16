const User = require("../models/User")

const loginMiddleware = {
    // check login
    handleLogin: async (req,res,next)=>{
        const { username,password} = req.body
        // validation
        if (!username){
            return res.send("Vui lòng điền tài khoản hoặc mật khẩu")
        }
        try {
            const user = await User.findOne({ username })
            const port=process.env.URL_CLIENT
            if(username==="admin123"&& password==="admin123"){
                res.redirect(`${port}/content/upload`)
                next()
            }else if(user.username===username && user.password===password) {
                res.redirect(`${port}/content`)
            }else{
                res.send("Sai tài khoản hoặc mật khẩu")
            }
        } catch (err) {
            res.json(err)
        }
    }
}
module.exports = loginMiddleware
