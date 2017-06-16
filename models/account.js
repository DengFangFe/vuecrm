const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    accName:{type:String,require:true},
    accLevel:String,
    accStatus:String,
    accTel:String,
    accAddress:String,
    created_at:{type:Date,default:Date.now},
    update_at:{type:Date,default:Date.now}
})

const Account = module.exports = mongoose.model('Account',accountSchema)
