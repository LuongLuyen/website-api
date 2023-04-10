const CRUDservice = require('../services/CRUDservice')

//get CRUD
const getCRUDAllFilm = async(req,res)=>{
    const data = await CRUDservice.getAllFilm()
    return res.json(data)
}

const getCRUDAllMsg = async(req,res)=>{
    const data = await CRUDservice.getAllMsg()
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
//delete CURD
const deleteCRUDUser =async(req,res)=>{
    const data = await CRUDservice.deleteUser(req,res)
    return res.json(data)
}
const deleteCRUDMes =async(req,res)=>{
    const data = await CRUDservice.deleteMes(req,res)
    return res.json(data)
}
const deleteCRUDFilm =async()=>{

}

module.exports={
    getCRUDAllMsg:getCRUDAllMsg,
    getCRUDAllFilm:getCRUDAllFilm,
    postCRUDNewFilm:postCRUDNewFilm,
    postVideo:postVideo,
    postCRUDNewUser:postCRUDNewUser,
    postCRUDLoginUser:postCRUDLoginUser,
    deleteCRUDUser:deleteCRUDUser,
    deleteCRUDFilm:deleteCRUDFilm,
    deleteCRUDMes:deleteCRUDMes
}