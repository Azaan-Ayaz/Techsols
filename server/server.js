const app = require("./app")
const dotenv = require("dotenv").config()
const colors = require("colors")
const cors = require("cors")




PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`.bgGreen.black)
})