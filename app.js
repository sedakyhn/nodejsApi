require('express-async-errors')
const express = require('express')
const app = express()
require('dotenv').config()
require('./src/db/dbConnection')
const port = process.env.PORT || 5001
const router = require('./src/routers')
const errorHandlerMiddleware = require('./src/middlewares/errorHandler')
// Middlewares
app.use(express.json())

app.use('/', router)

app.use(errorHandlerMiddleware)

app.get('/', (req, res) => {
    res.send("Merhaba")
})

app.listen(port, () => {
    console.log(`Server ${port} portundan çalışıyor...`)
})