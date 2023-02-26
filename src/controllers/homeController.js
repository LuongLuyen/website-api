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
    return res.json(data)
}

const postCRUDNewUser = async(req,res)=>{
    const data = await CRUDservice.createNewUser(req.body)
    return res.json(data)
}


module.exports={
    getCRUDAllUser:getCRUDAllUser,
    getCRUDAllFilm:getCRUDAllFilm,
    postCRUDNewFilm:postCRUDNewFilm,
    postCRUDNewUser:postCRUDNewUser,
}