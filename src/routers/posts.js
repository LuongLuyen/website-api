const homeController = require("../controllers/homeController")
const loginMiddleware =require("../middleware/loginMiddleware")
const uploadController =require("../controllers/uploadController")
const router = require("express").Router()

//    http://localhost:5000/api/posts/film
router.get('/film', homeController.getCRUDAllFilm)

//    http://localhost:5000/api/posts/user
router.get('/user', homeController.getCRUDAllUser)

//    http://localhost:5000/api/posts/register
router.post('/register', homeController.postCRUDNewUser)

//    http://localhost:5000/api/posts/add
router.post('/add',loginMiddleware.handleLogin, homeController.postCRUDNewFilm)

//    http://localhost:5000/api/posts/upload
//    Route này Xử lý khi client thực hiện hành động upload file
router.post("/upload",uploadController.postUpload)

module.exports= router