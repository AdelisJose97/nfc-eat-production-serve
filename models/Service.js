const { Schema, model } = require('mongoose')
const timestamp = require('mongoose-timestamp')

const ServiceSchema = new Schema({
  name: String,
  start: String,
  end: String,
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Categories'
  }]
})

ServiceSchema.plugin(timestamp)

const Service = model('Service', ServiceSchema)

module.exports = Service
