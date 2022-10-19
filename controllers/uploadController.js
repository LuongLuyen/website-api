const multer = require("multer")

const uploadController ={

    // postUpload
    postUpload: async(req, res) => {
        const diskStorage = multer.diskStorage({
            destination: (req, file, callback) => {
            callback(null, "uploads")
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
        res.send('Upload file thành công')
    })
    },
    
}
module.exports =uploadController