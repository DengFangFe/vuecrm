<template>
   <div class="warp">
      <div class="crm-analysis-box crm-briefing-box">
          <div class="crm-analysis-box-header">
             <div class="crm-analysis-title">
               <span class="crm-analysis-title-icon shortReport">简报</span>
             </div>
             <div class="crm-analysis-select">
                 <selectMenu v-on:listenToChildEvent="showMsgFromChild"></selectMenu>
             </div>
          </div>
          <div class="crm-analysis-box-content workreport">
            <div  class="workreport-content">
              <div class="workreport-content-item">
                <div class="workreport-item-left"><span class="acc_ico"></span></div>
                <div class="workreport-item-center" id="count_account">
            <span class="workreport-item-title">
              <span class="workreport-select-date" value="1">{{title}}</span>
              <span>新增客户</span>
            </span>
                  <span class="workreport-item-count">
              <span class="num" id="maccount_num">45</span>
              <span>个</span>
            </span>
                </div>
                <div class="workreport-item-right" id="acount_account">
             <span class="workreport-item-title">
              <span>客户总数</span>
            </span>
                  <span class="workreport-item-count">
              <span class="num" id="account_num">446</span>
              <span>个</span>
            </span>
                </div>
              </div>
              <div class="workreport-content-item">
                <div class="workreport-item-left"><span class="con_ico"></span></div>
                <div class="workreport-item-center" id="count_contact">
            <span class="workreport-item-title">
              <span class="workreport-select-date" value="1">{{title}}</span>
              <span>新增联系人</span>
            </span>
                  <span class="workreport-item-count">
              <span class="num" id="mcontact_num">24</span>
              <span>个</span>
            </span>
                </div>
                <div class="workreport-item-right" id="acount_contact">
             <span class="workreport-item-title">
              <span>联系人总数</span>
            </span>
                  <span class="workreport-item-count">
              <span class="num" id="contact_num">34</span>
              <span>个</span>
            </span>
                </div>
              </div>
              <div class="workreport-content-item">
                <div class="workreport-item-left"><span class="opp_ico"></span></div>
                <div class="workreport-item-center" id="count_opp">
            <span class="workreport-item-title">
              <span class="workreport-select-date" value="1">{{title}}</span>
              <span>新增商机</span>
            </span>
                  <span class="workreport-item-count">
              <span class="num" id="mopp_num">34</span>
              <span>个</span>
            </span>
                </div>
                <div class="workreport-item-right" id="acount_opp">
             <span class="workreport-item-title">
              <span>商机总数</span>
            </span>
                  <span class="workreport-item-count">
              <span class="num" id="opp_num">456</span>
              <span>个</span>
            </span>
                </div>
              </div>
            </div>
          </div>
      </div>
   </div>
</template>
<script>
  import $ from 'webpack-zepto';
  import selectMenu from '../components/select.vue';
  export default{
      name:'analysisContent',
      components:{
        selectMenu,
      },
      data(){
          return{
            title:'本周',
          }
      },
    methods:{
          showMsgFromChild:function (msg) {
             this.title = msg;
          }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  @import "../assets/sass/reset.scss";
  @import "../assets/sass/common.scss";
  .warp{
    padding-top: 40px;
  }
  .crm-analysis-box{
    background: #ffffff;
  }
  .crm-analysis-box-header{
    height: 90px;
    line-height: 90px;
    font-size: 30px;
    display: flex;
    border:1px solid $borderColor;
    .crm-analysis-title{
      flex: 1;
      padding-left: 20px;
      .crm-analysis-title-icon{
         background: url("../assets/images/index/workreport.png") left center no-repeat;
         display: inline-block;
         padding-left: 50px;
      }
    }
  }
  .crm-analysis-box-content{
    /*height: 300px;*/
  }
  .workreport .list {
    width: 100%;
    padding: 30px;
  }
  .workreport .workreport-content{
    padding: 60px 60px 60px 0;
  }
  .workreport .workreport-content .workreport-content-item{
    clear: both;
    overflow: hidden;
    margin-bottom: 60px;
  }
  .workreport .workreport-content .workreport-content-item .workreport-item-left{
    float: left;
    /* width: 15%; */
    margin-left: 30px;
    margin-right: 50px;
  }
  .workreport .workreport-content .workreport-content-item .workreport-item-center{
    float: left;
    width: 40%;
  }
  .workreport .workreport-content .workreport-content-item .workreport-item-right{
    float: right;
    width: 40%;
    text-align: right;
  }
  .workreport-content-item .workreport-item-right .workreport-item-title,
  .workreport-content-item .workreport-item-right .workreport-item-count{
    text-align: center;
  }
  .workreport .workreport-content-item span.acc_ico{
    background: url("../assets/images/index/acc_ico.png") center center no-repeat;
    width: 32px;
    height:32px;
    display: block;
    margin-top: 4px;
  }
  .workreport .workreport-content-item span.con_ico{
    background: url("../assets/images/index/con_ico.png") center center no-repeat;
    width: 32px;
    height:32px;
    display: block;
    margin-top: 4px;
  }
  .workreport .workreport-content-item span.opp_ico{
    background: url("../assets/images/index/opp_ico.png") center center no-repeat;
    width: 32px;
    height:32px;
    display: block;
    margin-top: 4px;
  }
  .workreport .workreport-item-title{
    display: block;
    margin-bottom: 25px;
  }
  .workreport .workreport-item-title span{
    font-size: 28px;
    color: #858e99;
  }
  .workreport  .workreport-item-count{
    display: block;
  }
  .workreport  .workreport-item-count .num{
    color: #55acee;
    font-size: 54px;
  }
  .workreport  .workreport-item-count span:nth-child(2){
    font-size: 24px;
    color: #858e99;
  }
</style>
