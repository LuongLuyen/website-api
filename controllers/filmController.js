const Film = require("../models/Film")

const filmController ={
    //add film
    addFilm: async (req, res) => {
        let { name,title,content} = req.body
        content= `http://localhost:5000/uploads/${content}`
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
            const newFilm = new Film({ name,title, content})
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
