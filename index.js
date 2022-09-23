const express  = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const postsRoute = require("./routers/posts")

const app = express()
const PORT = process.env.port || 5000

const multer = require("multer")
const path = require("path")


dotenv.config()


app.use(express.json())
app.use(cors())

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-project.47shdst.mongodb.net/?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB()


app.use('/api/posts', postsRoute)
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})