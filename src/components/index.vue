<template>
   <div class="warp">
     <header>
         <h2>
           <a href="javascript:;" class="crm-page-return"></a>
           <span class="title">首页</span>
         </h2>
     </header>
     <section class="crm-body">
       <Tab></Tab>
     </section>
     <footer>
       <nav class="crm-menu-item">
         <router-link :to="{name:'index'}">
           <i class="crm-menu-index-icon"></i>
           <span>首页</span>
         </router-link>
         <router-link :to="{name:'account'}">
           <i class="crm-menu-account-icon"></i>
           <span>客户</span>
         </router-link>
         <router-link :to="{name:'contact'}">
           <i class="crm-menu-contact-icon"></i>
           <span>联系人</span>
         </router-link>
         <router-link :to="{name:'opp'}">
           <i class="crm-menu-opp-icon"></i>
           <span>销售机会</span>
         </router-link>
         <router-link :to="{name:'me'}">
           <i class="crm-menu-me-icon"></i>
           <span>我</span>
         </router-link>
       </nav>
     </footer>
   </div>
</template>
<script>
    import $ from 'webpack-zepto';
    import Tab from '../components/indexTab.vue';
    export default{
        name:"index",
        components:{
          Tab
        },
        data () {
          return {
            msg: 'Welcome to Your Vue.js App'
          }
        }
    }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
   @import "../assets/sass/reset.scss";
   @import "../assets/sass/common.scss";
   header{
      width: 100%;
      height: 70px;
      line-height: 70px;
      background: #55acee;
      color: #fff;
      text-align: center;
      h2{
        font-size: 30px;
        font-weight: normal;
        line-height: 70px;
        a.crm-page-return{
          float: left;
          color: #ffffff;
          background: url("../assets/images/index/return.png") center center no-repeat;
          height: 34px;
          width: 20px;
          display: block;
          margin: 15px 0 0 15px;
        }
      }
      h3{
         width: 50%;
         font-bold:normal;
         font-size:16px;
         text-align: center;
         a{
           color:$fontColor;
           :hover{
             color: $fontHoverColor;
           }
         }
      }
   }
   section.crm-body{
      height: calc(100% - 180px);
      overflow: hidden;
   }
   footer{
     height: 110px;
     position: fixed;
     bottom: 0px;
     left: 0px;
     line-height: 50px;
     width: 100%;
     border-top:1px solid $borderColor;
     nav{
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: row;
       a{
         flex: 1;
         color:$fontColor;
         :hover{
           color: $fontHoverColor;
         }
         span{
            font-size:24px;
            display: block;
            text-align: center;
         }
         i.crm-menu-index-icon{
            display:block;
            background:url("../assets/images/footer/index.png") center center no-repeat;
            width: 46px;
            height: 46px;
           margin:15px auto 0 auto;
         }
         i.crm-menu-account-icon{
           display:block;
           background:url("../assets/images/footer/account.png") center center no-repeat;
           width: 46px;
           height: 46px;
           margin:15px auto 0 auto;
         }
         i.crm-menu-contact-icon{
           display:block;
           background:url("../assets/images/footer/me.png") center center no-repeat;
           width: 46px;
           height: 46px;
           margin:15px auto 0 auto;
         }
         i.crm-menu-opp-icon{
           display:block;
           background:url("../assets/images/footer/opp.png") center center no-repeat;
           width: 46px;
           height: 46px;
           margin:15px auto 0 auto;
         }
         i.crm-menu-me-icon{
           display:block;
           background:url("../assets/images/footer/me.png") center center no-repeat;
           width: 46px;
           height: 46px;
           margin:15px auto 0 auto;
         }
       }
       a.router-link-active{
         span{
           color:$fontHoverColor;
         }
         i.crm-menu-index-icon{
           background:url("../assets/images/footer/index_actived.png") center center no-repeat;
         }
         i.crm-menu-account-icon{
           background:url("../assets/images/footer/account_actived.png") center center no-repeat;
         }
         i.crm-menu-contact-icon{
           background:url("../assets/images/footer/me_actived.png") center center no-repeat;
         }
         i.crm-menu-opp-icon{
           background:url("../assets/images/footer/opp_actived.png") center center no-repeat;
         }
         i.crm-menu-me-icon{
           background:url("../assets/images/footer/me_actived.png") center center no-repeat;
         }
       }
     }
   }
</style>

