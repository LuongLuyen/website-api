const homeController = require("../controllers/homeController")
const router = require("express").Router()

//    http://localhost:5000/api/posts/film
router.get('/film', homeController.getCRUDAllFilm)
//    http://localhost:5000/api/posts/user
router.get('/user', homeController.getCRUDAllUser)


//    http://localhost:5000/api/posts/register
router.post('/register', homeController.postCRUDNewUser)
//    http://localhost:5000/api/posts/login
router.post('/login', homeController.postCRUDLoginUser)



//    http://localhost:5000/api/posts/add
router.post('/add',homeController.postCRUDNewFilm)
//    Route này Xử lý khi client thực hiện hành động upload file
//    http://localhost:5000/api/posts/upload
router.post("/upload",homeController.postVideo)

module.exports= router