const User = require("../models/User")

const filmController ={

    //add user
    register: async (req, res) => {
        const { username,password} = req.body
        console.log(username,password)
        // validation
        if (!username){
            return res.send("vui lòng điền tk mk")
        }
        try {
            // Check for existing user
            const user = await User.findOne({ username })
            if (user){
                return res.rend("đã tồn tại tk")
            }
            //create user
            const newUser = new User({ username,password})
            //user save DB
            await newUser.save(newUser)
            res.rend("tạo thành công")
        } catch (err) {
            res.send("lỗi")
        }
    },
}

module.exports = filmController