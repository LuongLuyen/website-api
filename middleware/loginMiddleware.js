
const loginMiddleware = {
    // check login
    handleLogin: async (req,res,next)=>{
        try{
            const {username,password}= req.body
            const admin ={
                username:"admin123",
                password:"admin123"
            }
            if(username===admin.username && password===admin.password){
                res.redirect("http://localhost:3000/content/login/upload")
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
