const multer = require('multer')
const moment = require('moment')
const mongoose = require('mongoose')
const {Router} = require('express')
const router = Router()
const Products = require('./../models/products')
const Article = require('./../models/article')
const upload = require('./../middleware/upload')



router.post('/upload', (req, res) => {
    
})

router.post('/profile', upload.single('img'), (req, res) => {
    console.log(req.file)
})

router.post('/add', upload.single('img'), async (req, res) => {
    try {
        const {name, price} = req.body
        
        const product = new Products({
            name: name,
            price: price,
            imageSrc: req.file.path
        })

        await product.save()

    }
    catch(e) {
        res.status(500).send({messenge: "Ошибка"})
    }
})

router.post('/show', async (req, res) => {
    try {
        const user = await Products.find()
        res.send(user)
    }
    catch(e) {
        res.status(500).send({messenge: "Ошибка"})
    }
})

router.post('/addArticle', upload.single('img'), async(req, res) => {
    try {
        const article = new Article({
            title: req.body.title,
            content: req.body.content,
            type: req.body.type,
            image: req.file ? req.file.path : '',
            tag: req.body.tag,
            number: moment().format('DD'),
            month: moment().format('MMM'),
            fullDate: moment().format('LL')
        })
        await article.save();
    }
    catch {
        res.status(500).send({messenge: "Ошибка"})
    }
})

router.post('/showArticle', async (req, res) => {
    try {
        const article = await Article.find()
        res.send(article)
    }
    catch(e) {
        res.status(500).send({messenge: "Ошибка"})
    }
})

module.exports = router
