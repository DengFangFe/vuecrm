const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')


//查询所有客户
router.get('/contact',(req,res) => {
	Contact.find({})
	.sort({update_at:-1})
	.then(contacts => {
		res.json(contacts)
	})
	.catch(err => {
		res.json(err)
	})
})

//通过ObjectId 查询单个电影
router.get('/contact/:id',(req,res) => {
	Contact.findById(req.params.id)
	.then(contact =>{
		res.json(contact)
	})
	.catch(err => {
		res.json(err)
	})
})

//添加一个客户
router.post('/contact',(req,res) => {
	Contact.create(req.body,(err,contact) => {
		if(err){
			res.json(err)
		}else{
			res.json(contact)
		}
	})
})

//更新一部客户
router.put('/contact/:id',(req,res) => {
	Contact.findOneAndUpdate({_id : req.params.id}
		,{$set:{
			accName:req.body.accName,
			accLevel:req.body.accLevel,
			accStatus:req.body.accStatus,
			accTel:req.body.accTel,
			accAddress:req.body.accAddress
		}},{
			new: true
		})
	   .then(contact => res.json(contact))
	   .catch(err => res.json(err))
})


//删除一部客户
router.delete('/contact/:id',(req,res) => {
	Contact.findOneAndRemove({
		_id:req.params.id
	})
	.then(contact => res.send('${contact.title}删除成功'))
	.catch(err => res.json(err))
})

module.exports = router;