const CRUDservice = require('../services/CRUDservice')

//get CRUD
const getCRUDAllFilm = async(req,res)=>{
    const data = await CRUDservice.getAllFilm()
    return res.json(data)
}
const getCRUDAllUser = async(req,res)=>{
    const data = await CRUDservice.getAllUser()
    return res.json(data)
}

//post CRUD
const postCRUDNewFilm = async(req,res)=>{
    const data = await CRUDservice.createNewFilm(req.body)
    console.log("data",data)
    return res.json(data)
}
//postVideo
const postVideo = async(req,res)=>{
    const data = await CRUDservice.createVideo(req,res)
    return res.json(data)
}
//post user
const postCRUDNewUser = async(req,res)=>{
    const data = await CRUDservice.createNewUser(req.body)
    return res.json(data)
}
const postCRUDLoginUser = async(req,res)=>{
    const data = await CRUDservice.loginUser(req,res)
    return res.json(data)
}



module.exports={
    getCRUDAllUser:getCRUDAllUser,
    getCRUDAllFilm:getCRUDAllFilm,
    postCRUDNewFilm:postCRUDNewFilm,
    postVideo:postVideo,
    postCRUDNewUser:postCRUDNewUser,
    postCRUDLoginUser:postCRUDLoginUser
}