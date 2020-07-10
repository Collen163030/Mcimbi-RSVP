var mongoose = require('mongoose')
var Schema = mongoose.Schema

var testSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, default: Date.now },
});
var testModel = mongoose.model('test', testSchema);

module.exports = testModel;