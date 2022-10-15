const Film = require("../models/Film")

const filmController ={

    //add film
    addFilm: async (req, res) => {
        let { name,title,fileName} = req.body
        console.log({name,title,fileName})
        video = `http://localhost:5000/uploads/${fileName}`
        const img ='http://localhost:5000/uploads/a.jpg'
        // validation
        if (!name)
        return 
            res.status(400).json()
        try {
            // Check for existing film
            const film = await Film.findOne({ name })
            if (film)
                return 
                    res.status(400).json()
            //create film
            const newFilm = new Film({ name,title, video,img})
            //film save DB
            await newFilm.save(newFilm)
            res.status(200).json(newFilm)
        } catch (err) {
            res.status(500).json()
        }
    },
    //get all film
    getAllFilm: async(req,res)=>{
        try{
            const film = await Film.find()
            res.status(200).json(film)

        }catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = filmController
