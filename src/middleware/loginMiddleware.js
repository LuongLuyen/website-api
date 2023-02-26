const User = require("../models/User")

const loginMiddleware = {
    // check login
    handleLogin: async (req,res,next)=>{
        const { username,password} = req.body
        // validation
        if (!username){
            return res.json({"Thông báo":"Vui lòng điền tài khoản hoặc mật khẩu"})
        }
        try {
            const user = await User.findOne({ username })
            const admin={
                userAdmin:"admin123",
                passwordAdmin:"admin123"
            }
            const port=process.env.URL_CLIENT
            if(username===admin.userAdmin&& password===admin.passwordAdmin){
                res.redirect(`${port}/content/upload`)
                // next()
            }else if(user.username===username && user.password===password) {
                res.redirect(`${port}/content`)
            }else{
                res.redirect(`${port}/login`)
            }
        } catch (err) {
            res.json(err)
        }
    }
}
module.exports = loginMiddleware
