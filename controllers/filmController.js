const Film = require("../models/Film")

const filmController ={

    //add film
    addFilm: async (req, res) => {
        let { name,title,fileName} = req.body
        const port = process.env.URL_SERVER
        video = `${port}/uploads/${fileName}`
        const img =`${port}/uploads/${Math.floor(Math.random() * 10)}.jpg`
        // validation
        if (!name)
        return 
            res.json()
        try {
            // Check for existing film
            const film = await Film.findOne({ name })
            if (film)
                return 
                    res.json()
            //create film
            const newFilm = new Film({ name,title, video,img})
            //film save DB
            await newFilm.save(newFilm)
            res.json(newFilm)
        } catch (err) {
            res.json()
        }
    },
    //get all film
    getAllFilm: async(req,res)=>{
        try{
            const film = await Film.find()
            res.json(film)

        }catch(err){
            res.json(err)
        }
    }
}

module.exports = filmController
