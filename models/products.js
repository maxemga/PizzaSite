const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, request: true},
    price: {type: String, request: true},
    imageSrc: {type: String, request: true}
})

module.exports = model('Product', schema)