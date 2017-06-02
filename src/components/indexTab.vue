<template>
  <div class="warp">
     <div class="crm-index-tab">
        <div class="crm-index-tab-nav">
          <a href="javascript:;" :class="workClass" datatype="1" @click="switchWorkTab">{{todayWork}}</a>
          <a href="javascript:;" :class="ayalysisClass" datatype="2" @click="switchAnalysisTab">{{countAnalysis}}</a>
        </div>
        <div class="crm-index-tab-content" v-show="isTodayWork">
            <schdule></schdule>
        </div>
        <div class="crm-index-tab-content" v-show="isAnalysis">
           <ayalysis></ayalysis>
        </div>
     </div>
  </div>
</template>
<script>
  import $ from 'webpack-zepto';
  import schdule from "../components/work.vue";
  import ayalysis from "../components/analysis.vue"
  export default{
      name:'tab',
      components:{
        schdule,
        ayalysis,
      },
      data(){
          return{
              todayWork:"今日工作",
              countAnalysis:'统计分析',
              isTodayWork:true,
              isAnalysis:false,
              workClass:{
                unactived:false,
                actived:true
              },
              ayalysisClass:{
                unactived:true,
                actived:false
              }
          }
      },
    mounted:function () {
    },
    methods:{
      switchWorkTab:function () {
          this.workClass.actived = true;
          this.ayalysisClass.actived = false;
          this.workClass.unactived = false;
          this.ayalysisClass.unactived = true;
          this.isTodayWork = true;
          this.isAnalysis = false;
      },
      switchAnalysisTab:function () {
         this.ayalysisClass.actived = true;
         this.ayalysisClass.unactived = false;
         this.workClass.actived = false;
         this.workClass.unactived = true;
         this.isTodayWork = false;
         this.isAnalysis = true;
      }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  @import "../assets/sass/reset.scss";
  @import "../assets/sass/common.scss";
    .crm-index-tab {
      width: 100%;
      height: 100%;
      overflow: auto;
    }
    .crm-index-tab-nav{
      width: 100%;
      height: 90px;
      line-height: 90px;
      display: flex;
      justify-items: center;
      align-items: center;
      border:1px solid $borderColor;
      a{
        flex:1;
        font-size: 26px;
        text-align: center;
        color: $fontColor;
        text-decoration:none;
        :hover{
          text-decoration: none;
        }
      }
      a.actived{
        border-bottom:2px solid $borderSelectColor;
        color: $fontHoverColor;
        text-decoration: none;
      }
     }
      .crm-index-tab-content{
        font-size: 20px;
        height: 100%;
        background: #f5f8fa;
      }

</style>
