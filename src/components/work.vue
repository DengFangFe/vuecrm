<template>
    <div class="warp">
        <div class="crm-schdule-content">
           <div class="crm-schdule-list" v-for="schdule in schduleList">
              <div class="crm-schdule-list-time">
                 <span class="startTime">{{schdule.starttime}}</span>
                 <span class="line">-</span>
                 <span class="endTime">{{schdule.endtime}}</span>
              </div>
              <div class="crm-schdule-list-text">{{schdule.text}}</div>

             <div class="crm-schdule-list-operation" v-if="schdule.operation">
                  <a href="javascript:;" class="crm-schdule-reject">{{reject}}</a>
                  <a href="javascript:;" class="crm-schdule-refuse">{{refuse}}</a>
                </div>
              <div class="crm-schdule-list-operation" v-else >
                <a href="javascript:;" class="crm-schdule-reject" style="visibility: hidden">{{reject}}</a>
                <a href="javascript:;" class="crm-schdule-refuse" style="visibility: hidden">{{refuse}}</a>
              </div>
           </div>
        </div>
    </div>
</template>
<script>
   import $ from 'webpack-zepto';
   export default{
       name:'schdule',
       data(){
           return{
               reject:"接受",
               refuse:"拒绝",
               schduleList:[],
           }
       },
       mounted:function () {
           var list = {
             "links": [
               {
                 "starttime": "14:30",
                 "endtime": "15:00",
                 "text": "部门会议",
                 "operation":true
               },
               {
                 "starttime": "14:30",
                 "endtime": "15:00",
                 "text": "UE方案讨论",
                 "operation":false
               },
               {
                 "starttime": "14:30",
                 "endtime": "15:00",
                 "text": "伙伴培训",
                 "operation":false
               },
               {
                 "starttime": "14:30",
                 "endtime": "15:00",
                 "text": "伙伴支持",
                 "operation":false
               },
               {
                 "starttime": "14:30",
                 "endtime": "15:00",
                 "text": "电话会议",
                 "operation":false
               },
               {
                 "starttime": "14:30",
                 "endtime": "15:00",
                 "text": "拜访美邦国际",
                 "operation":true
               },
               {
                 "starttime": "14:30",
                 "endtime": "15:00",
                 "text": "其他类型日程",
                 "operation":false
               }
             ]
           };
           this.schduleList = list.links;
       },
       method:{

       },
   }
</script>
<style rel="stylesheet/scss"  type="text/css" lang="scss" scoped>
  @import "../assets/sass/reset.scss";
  @import "../assets/sass/common.scss";

  .crm-schdule-content{
       width: 100%;
       height: 100%;
  }
  .crm-schdule-list{
    height: 120px;
    display: flex;
    border-bottom: 1px solid $borderColor;
    font-size: 26px;
    align-items: baseline;
    .crm-schdule-list-time{
      flex:1;
      margin-top: 14px;
      margin-left: 20px;
      span{
        display: block;
      }
      .line{
        margin-left: 27px;
        margin-top: -1px;
      }
    }
    .crm-schdule-list-text{
      flex: 3;
      align-self: center;//居中
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .crm-schdule-list-operation{
      align-self: center;//居中
      padding-right: 20px;
      a{
         display: inline-block;
         width: 100px;
         height: 60px;
         text-align: center;
         line-height: 60px;
         color: #ffffff;
        border-radius: $borderRadius;
      }
      .crm-schdule-reject{
        background:#55acee;
        margin-right: 10px;
      }
      .crm-schdule-refuse{
        background: #ff544b;
      }
    }
  }
</style>
