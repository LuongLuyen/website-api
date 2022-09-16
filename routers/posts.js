const filmController =require("../controllers/filmController")
const router = require("express").Router()

//    http://localhost:5000/api/posts/film
router.get('/film', filmController.getAllFilm)

//    http://localhost:5000/api/posts/add
router.post('/add', filmController.addFilm)

module.exports= router