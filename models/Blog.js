const { model, Schema } = require('mongoose')

const Blog = new Schema({

text: {
    type: String,
    unique: true,
    required: true
},
user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
},  { timestamps: true})

module.exports = model('Blog', Blog)
