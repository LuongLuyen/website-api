const filmController =require("../controllers/filmController")
const uploadController =require("../controllers/uploadController")
const router = require("express").Router()

//    http://localhost:5000/api/posts/film
router.get('/film', filmController.getAllFilm)

//    http://localhost:5000/api/posts/add
router.post('/add', filmController.addFilm)
//    Route này trả về cái form upload cho client
router.get("/", uploadController.getUpload)
// Route này Xử lý khi client thực hiện hành động upload file
router.post("/upload", uploadController.postUpload)

module.exports= router