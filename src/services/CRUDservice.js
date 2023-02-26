const User = require("../models/User")
const Film = require("../models/Film")
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
    console.log(name,title,fileName)
    const port = process.env.URL_SERVER
    video = `${port}/uploads/${fileName}`
    const img =`${port}/uploads/${Math.floor(Math.random() * 10)}.jpg`
    
    if (!name){     
        const status="Không bỏ trống tên film"
        return status
    }try {
        const film = await Film.findOne({ name })
        if (film){
            const status=`$tên film đã tồn tại${film}`
            return status
        }
        const newFilm = new Film({ name,title, video,img})
        await newFilm.save(newFilm)
        const status="Đăng phim thành công"
        return status
    } catch (err) {
        return err
    }

}

const getAllUser = async()=>{
    return new Promise(async(resolve,reject) => {
        try {
            const user= await User.find()
            resolve(user)
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

module.exports={
    createNewUser:createNewUser,
    createNewFilm:createNewFilm,
    getAllUser:getAllUser,
    getAllFilm:getAllFilm
}