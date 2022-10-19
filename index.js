const express  = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const postsRoute = require("./routers/posts")

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/uploads', express.static('./uploads'))


const connectDB = async () => {
	try {
		await mongoose.connect(
			process.env.URL,
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