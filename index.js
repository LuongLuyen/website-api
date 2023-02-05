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

// Add headers before the routes are defined
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://client-97i3.netlify.app')
	
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://luongluyen:luyen123@mern-project.47shdst.mongodb.net/?retryWrites=true&w=majority`,
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
