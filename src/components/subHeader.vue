<template>
	<div class="header">
		<header>
			<router-link to="/" @click="returnBack" class="returnBack"></router-link>
			<span class="header-title">{{title}}</span>
		</header>
	</div>
</template>
<script>
	import $ from 'webpack-zepto'
	export default {
		name:'subHeader',
		data(){
			return{
				title:"列表名称"
			}
		},
		methods:{
			returnBack(){
				$router.back(-1)
			}
		}
	}
</script>
<style rel="stylesheet/scss"  type="text/css" lang="scss" scoped>
	 @import "../assets/sass/reset.scss";
     @import "../assets/sass/common.scss";
	.header{
		-webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    background-color: #55acee;
	    box-sizing: border-box;
	    color: #fff;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    font-size: 28px;
	    height: 70px;
	    line-height: 1;
	    position: relative;
	    text-align: center;
	    white-space: nowrap;
	    width:100%;
	    text-align:center;
	}
	header{
		width:100%;
	}
	.returnBack{
		 float: left;
          color: #ffffff;
          background: url("../assets/images/index/return.png") center center no-repeat;
          height: 34px;
          width: 20px;
          display: block;
          margin: 0px 0 0 15px;
	}
	.header-title{
		width: calc(100% - 100px);
	    text-align: center;
	    margin: 0 auto;
	    display: inline-block;
	    float:left;
	}
</style>