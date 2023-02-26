const express  = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const postsRoute = require("./src/routers/posts")

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/uploads', express.static('./uploads'))

// Add headers before the routes are defined
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_CLIENT)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

const connectDB = async () => {
	try {
		await mongoose.connect(
			process.env.URL_DB,
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
