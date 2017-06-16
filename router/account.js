const express = require('express')
const router = express.Router()
const Account = require('../models/account')


//查询所有客户
router.get('/account',(req,res) => {
	Account.find({})
	.sort({update_at:-1})
	.then(accounts => {
		res.json(accounts)
	})
	.catch(err => {
		res.json(err)
	})
})

//通过ObjectId 查询单个电影
router.get('/account/:id',(req,res) => {
	Account.findById(req.params.id)
	.then(account =>{
		res.json(account)
	})
	.catch(err => {
		res.json(err)
	})
})

//添加一个客户
router.post('/account',(req,res) => {
	Account.create(req.body,(err,account) => {
		if(err){
			res.json(err)
		}else{
			res.json(account)
		}
	})
})

//更新一部客户
router.put('/account/:id',(req,res) => {
	Account.findOneAndUpdate({_id : req.params.id}
		,{$set:{
			accName:req.body.accName,
			accLevel:req.body.accLevel,
			accStatus:req.body.accStatus,
			accTel:req.body.accTel,
			accAddress:req.body.accAddress
		}},{
			new: true
		})
	   .then(account => res.json(account))
	   .catch(err => res.json(err))
})


//删除一部客户
router.delete('/account/:id',(req,res) => {
	Account.findOneAndRemove({
		_id:req.params.id
	})
	.then(account => res.send('${account.title}删除成功'))
	.catch(err => res.json(err))
})

module.exports = router;