const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {type: String, request: true},
    content: {type: String, request: true},
    type: {type: String, request: true},
    image: {type: String},
    tag: {type: String, request: false},
    number: {type: String, request: true},
    month: {type: String, request: true},
    fullDate: {type: String, request: true}
})

module.exports = model('Article', schema)