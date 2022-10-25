const filmController = require("../controllers/filmController")
const userController = require("../controllers/userController")
const uploadController =require("../controllers/uploadController")
const loginMiddleware =require("../middleware/loginMiddleware")
const router = require("express").Router()

//    http://localhost:5000/api/posts/film
router.get('/film', filmController.getAllFilm)

//    http://localhost:5000/api/posts/register
router.post('/register', userController.register)

//    http://localhost:5000/api/posts/add
router.post('/add',loginMiddleware.handleLogin, filmController.addFilm)

//    http://localhost:5000/api/posts/upload
//    Route này Xử lý khi client thực hiện hành động upload file
router.post("/upload",uploadController.postUpload)

module.exports= router