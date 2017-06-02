<template>
   <div class="crm-select-components-warp">
     <div class="crm-select-components">
       <input v-model="selected" type="text" v-bind:readonly="input_disabled" id="crmSelect" class="crm-select-input" v-on:click.stop="setselUl"/>
       <i class="crm-select-arrow"></i>
     </div>
     <ul class="crm-select-selectMenu">
       <li class="crm-select-selectMenu-item" v-for="item in dateList" v-bind:data-val="item.text" v-bind:data-id="item.id" v-text="item.text" v-on:click.stop="setSelectVal(item.text)"></li>
     </ul>
   </div>
</template>

<script>
  import $ from 'webpack-zepto';
  export default{
      name:'selectMenu',
      data(){
          return{
              selected:'本周',
              serviceType:0,
              dateList:[],
              num:true,
              input_disabled:true
          }
      },
    mounted:function () {
      var data = {
          "list":[
            {
                "id":"0",
                "text":"本日"
            },
            {
              "id":"1",
              "text":"本周"
            },
            {
              "id":"2",
              "text":"本月"
            },
            {
              "id":"3",
              "text":"本年"
            },
            {
              "id":"4",
              "text":"去年"
            },
          ]
       };
        this.dateList = data.list;
      },
      methods:{
          setSelectVal:function (val) {
             $('.crm-select-components-warp ul').hide();
             this.num = true;
             this.selected = val;
             this.$emit('listenToChildEvent',this.selected);
          },
        setselUl:function () {
          if(this.num){
            $('.crm-select-components-warp ul').show();
            this.num = false;
          }else{
            $('.crm-select-components-warp ul').hide();
            this.num = true;
          }
        },
      },
    watch:{}
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  @import "../assets/sass/reset.scss";
  @import "../assets/sass/common.scss";
    .crm-select-components-warp{
      width: 100%;
    }
   .crm-select-components{
     width:130px;
     height:50px;
     line-height: 50px;
     border:1px solid $borderSelectColor;
     border-radius: $borderRadius;
     margin: 19px 20px 0 0;
     padding-left: 10px;
     .crm-select-input{
       border:none;
       border-radius: $borderRadius;
       font-size: 24px;
       width: 80%;
       float: left;
       line-height: 46px;
       background: transparent;
       color: #55acee;
     }
     .crm-select-arrow{
        display: inline-block;
        background: url("../assets/images/index/jiantou-lan.png") center center no-repeat;
        width: 16px;
        height: 16px;
     }
   }
  .crm-select-selectMenu{
    width: 130px;
    border:1px solid $borderColor;
    display: none;
    font-size: 24px;
    .crm-select-selectMenu-item{
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #475059;
      width: 100%;
      background: #ffffff;
      border-bottom: 1px solid $borderColor;
    }
  }

</style>
