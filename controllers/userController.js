const User= require("../models/User")

const userController ={
    register: async (res,req)=>{
        const username= req.body
        const password= req.body
      
        // validation
        if (!username)
        return 
            res.status(400).json()
        try {
            // Check for existing user
            const user = await User.findOne({ username })
            if (user)
                return 
                    res.status(400).json()
            //create user
            const newUser = new User({ username,password})
            //user save DB
            await newUser.save(newUser)
            res.status(200).json(newUser)
        } catch (err) {
            res.status(500).json()
        }
    }
}
module.exports = userController