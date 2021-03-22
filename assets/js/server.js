import express from 'express'
import path from 'path'

const __dirname = path.resolve();
const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/Veb/PizzaSite/', 'index.html'));
})

server.use(express.static("assets"));

app.use('/css', express.static(__dirname +'/css'));

server.listen(3000, () => {
    console.log("Connected")
})
