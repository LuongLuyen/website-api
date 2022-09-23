const Film = require("../models/Film")

const filmController ={
    //add film
    addFilm: async (req, res) => {
        const { title,content} = req.body
        try {
            //create film
            const newFilm = new Film({ title, content})
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
