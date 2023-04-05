const User = require("../models/User")
const Film = require("../models/Film")
const Msg = require("../models/Msg")
const multer = require("multer")


const createNewUser = async(data)=>{
    const { username,password} = data


    if (!username){
        const status =`vui lòng điền tk mk?${username}`
        return status
    }
    try {
        const user = await User.findOne({ username })
        if (user){
            const status=`đã tồn tại:${user}`
            return status
        }
        const newUser = new User({ username,password})
        await newUser.save(newUser)
        const status=`Tạo thành công${newUser}`
        return status
    } catch (err) {
        return err
    }
}

const createNewFilm = async(data)=>{
    let { name,title,fileName} = data
    const port = process.env.URL_SERVER
    video = `${port}/uploads/${fileName}`
    const img =`${port}/uploads/${Math.floor(Math.random() * 10)}.jpg`
    console.log("data-form",[name,title,video,img])
    
    if (!name){     
        return name
    }try {
        const film = await Film.findOne({ name })
        if (film){
            return film
        }
        const newFilm = new Film({ name,title, video,img})
        newFilm.save(newFilm)
        return newFilm
    } catch (err) {
        return err
    }

}

const createVideo = async(req,res)=>{
    const diskStorage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "uploads")
        },
        filename: (req, file, callback) => {
            const math = ["image/png", "image/jpeg","video/mp4"]
            if (math.indexOf(file.mimetype) === -1) {
                return callback(null)
            }
            const filename = `${file.originalname}`
            callback(null, filename)
        }
    })
    const uploadFile = multer({storage: diskStorage}).single("file")
    uploadFile(req, res, (err) => {
        if (err) {
            const status = "lỗi"
            return status
        }
        const status ="Upload file thành công"
        return status
    })

}




const getAllMsg = async()=>{
    return new Promise(async(resolve,reject) => {
        try {
            const msg= await Msg.find()
            resolve(msg)
        } catch (err) {
            reject(err)
        }
    })
}

const getAllFilm = async()=>{
    return new Promise(async(resolve,reject) => {
        try {
            const film= await Film.find()
            resolve(film)
        } catch (err) {
            reject(err)
        }
    })
}
const loginUser = async(req,res)=>{
    const {username,password}=req.body
        if (!username){
            const status = "Vui lòng điền tài khoản hoặc mật khẩu"
            return status
        }
        try {
            const port=process.env.URL_CLIENT
            const user = await User.findOne({ username })
            if(user.username===username && user.password===password) {
                res.redirect(`${port}/content`)
            }else{
                res.redirect(`${port}/login`)
            }
        } catch (err) {
            const status =`Lỗi:.....:${err}`
            return status
        }

}
const deleteUser = async(req,res)=>{}

module.exports={
    createNewUser:createNewUser,
    createNewFilm:createNewFilm,
    createVideo:createVideo,
    getAllMsg:getAllMsg,
    getAllFilm:getAllFilm,
    loginUser:loginUser,
    deleteUser:deleteUser,
}