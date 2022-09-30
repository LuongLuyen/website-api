const multer = require("multer")

const uploadController ={
     //getUpload
     getUpload: async(req,res)=>{
        try{
            res.sendFile('http://localhost:3000/content/upload')
            res.status(200).json()
        }catch(err){
            res.status(500).json(err)
        }
    },
    // postUpload
    postUpload: async(req, res) => {
   
        const diskStorage = multer.diskStorage({
            destination: (req, file, callback) => {
            callback(null, "uploads");
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
        uploadFile(req, res, (error) => {
          if (error) {
            return res.send('err')
          }
          res.send('Upload thanh cong')
        })
    },
    
}
module.exports =uploadController