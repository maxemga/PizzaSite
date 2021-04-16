const express = require('express');
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const multer  = require('multer')

const {Router} = require('express')
const router = Router()
const upload = require('./middleware/upload')



const PORT = config.get("PORT")
const app = express();
app.use(express.json({extended: true}))
app.use(cors())

app.use('/api/server', require('./routes/addProducts'));


async function Start() {
    try {
        await mongoose.connect(config.get("mongoKey"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, console.log(`Соединение установлено, порт ${PORT}`))
    }
    catch(e) {
        console.log("Error ", e.messege)
        process.exit(1)
    }
}

Start()
