const mongoose = require('mongoose')
// mongoose.connect('mongo://localhost:27017/mern-ecom', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
module.exports = mongoConn = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("app connected to mongo")
    } catch (error) {
        console.log("Error in connection to mongo", error)
    }
}
