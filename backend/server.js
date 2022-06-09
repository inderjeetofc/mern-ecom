const dotenv = require('dotenv')
dotenv.config({ path: 'backend/config/config.env' })
const app = require('./app')


app.listen(process.env.PORT, () => {
    console.log(`server is working on port ${process.env.PORT}`)
})