const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
	conName:{type:String,require:true},
	conTel:String,
	conpost:String,
	conDepartment:String,
	conEmail:String,
	created_at:{type:Date,default:Date.now},
	update_at:{type:Date,default:Date.now}

})

const Contact = module.exports = mongoose.model('Contact',contactSchema)