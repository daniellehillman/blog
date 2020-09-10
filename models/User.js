const { model, Schema } = require('mongoose')

const User = new Schema({

name: {
    type: String,
    unique: true,
    required: true
},
username: {
    type: String,
    unique: true,
    required: true
},
email: {
    type: String,
    unique: true,
    required: true
},
items: [{
type: Schema.Types.ObjectId,
ref: 'Blog'

}]

}, { timestamps: true})

module.exports = model('User', User)

