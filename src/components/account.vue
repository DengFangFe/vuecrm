<template>
  <div class="crm-acc-warp page-popup">
      <div class="crm-acc-header">
         <subHeader></subHeader>
         <a href="javascript:;" class="crm-acc-header-acc" @click="openAddAccountModal"></a>
      </div>
      <div class="crm-acc-body">
        <div class="crm-accList-null" v-if="accounts.length == 0">
             <a href="javascript:;" @click="openAddAccountModal"></a>
        </div>
        <div class="crm-accList-data" v-else-if>
          <ul v-for="account of accounts" class="crm-acc-item">
             <li>
                <span class="crm-acc-name">{{account.accName}}</span>
                <span class="crm-acc-operate">
                  <a href="javascript:;">修改</a>
                  <a href="javascript:;" @click="removeAccount(account)">删除</a>
                </span>
             </li>
          </ul>
        </div>
         
      </div>
       <mt-popup :show="addAccountModal" v-model="popupVisible" position="right">
           <div class="crm-account-add-popup">
               <ul class="crm-detail-list">
                 <li>
                    <label for="">客户名称：</label>
                    <input type="text" v-model="accName">
                 </li>
                 <li>
                    <label for="">客户等级：</label>
                    <input type="text" v-model="accLevel">
                 </li>
                 <li>
                    <label for="">公司状态：</label>
                    <input type="text" v-model="accStatus">
                 </li>
                 <li>
                    <label for="">电话：</label>
                    <input type="text" v-model="accTel">
                 </li>
                 <li>
                    <label for="">描述：</label>
                    <input type="text" v-model="introduction">
                 </li>
               </ul>
           </div>
           <div class="crm-account-add-footer">
              <a href="javascript:;"  @click="closeModal" class="resetBtn">取消</a>
              <a href="javascript:;"  @click="addAccount" class="submitBtn">确认</a>
           </div>
       </mt-popup>
     
  </div>
    
</template>
<script>
  import $ from 'webpack-zepto';
  import subHeader from '../components/subHeader'
  import { Popup } from 'mint-ui';
  export default{
      created(){
        this.getAccounts();
        document.title = this.$router.name
      },
      name:'account',
      components:{
        subHeader,
        'mt-popup':Popup,
      },
      data(){
          return {
              msg:"客户列表",
              accName:'',
              accLevel:'',
              accStatus:'',
              accTel:'',
              accAddress:'',
              account_id:'',
              introduction:'',
              accounts:[],
              popupVisible:false,
              addAccountModal:false,
              editAccountModal:false
          }
      },
      methods:{
        getAccounts(){
          this.$http.get('/accountApi/account')
          .then(res => {
            console.log(res.data)
            this.accounts = res.data
          })
          .catch(err => {
            this.toastr.error(`${err.message}`, 'ERROR!')
            console.log(err)
          })
        },
        addAccount(){
          this.$http.post('/accountApi/account',{
              accName:this.accName,
              accLevel:this.accLevel,
              accStatus:this.accStatus,
              accAddress:this.accAddress,
              accTel:this.accTel,
              introduction:this.introduction,
          })
          .then(res =>{
            this.toastr.success("客户添加成功");
            console.log(res.data)
            this.popupVisible = false
            this.accName = ''
            this.accLevel = ''
            this.accStatus = ''
            this.accTel = ''
            this.accAddress = ''
            this.introduction = ''
            this.account_id = ''
            this.getAccounts()
          })
          .catch(e => {
             this.toastr.warn('保存失败')
             console.log(e)
          })
        },
        removeAccount(Account){
          let id = Account._id
          this.$http.delete(`/accountApi/account/${id}`)
          .then(res => {
            this.toastr.success("删除成功")
            this.getAccounts()
          })
          .catch(e => console.log(e))
        },
        closeModal(){
          this.addAccountModal = false
          this.editAccountModal = false
          this.popupVisible = false
          this.accName = ''
          this.accLevel = ''
          this.accStatus = ''
          this.accTel = ''
          this.accAddress = ''
          this.introduction = ''
          this.account_id = ''
        },
        openAddAccountModal() {
           this.popupVisible = true
        },
      }
  }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  @import "../assets/sass/reset.scss";
  @import "../assets/sass/common.scss";
  .mint-popup {
    position:absolute;
    width:100%;
    height:100%
  }
  .crm-acc-header-acc{
    position:absolute;
    right:40px;
    top:18px;
    background:url("../assets/images/common/add.png");
    width:30px;
    height:30px;
  }
  .crm-acc-item{
    width:100%;
    height:100%;
    overflow:auto;
    li{
      display:flex;
      height:100px;
      border-bottom:1px solid $borderColor;
      align-items:center;
      padding-left:20px;
      .crm-acc-name{
        flex:1;
        font-size:26px;
      }
      .crm-acc-operate{
         a{
            width:80px;
            height:40px;
            color:#fff;
            border:1px solid #00aaef;
            background-color:#00aaef;
            text-align:center;
            display:inline-block;
            line-height:40px;
            margin-right:20px;
            border-radius:$borderRadius;
            font-size:24px;
         }
      }
    }
  }
  .crm-account-add-popup {
    height:100%;
    width:100%;
    background:#fff;
  }
  .crm-detail-list{
    height:100%;
    width:100%;
    li{
      height:120px;
      display:flex;
      padding:0 90px 0 20px;
      align-items: center;
      label{
        font-size:26px;
        width:150px;
      }
      input{
        flex:1;
        height:60px;
        line-height:60px;
        border:1px solid $borderColor;
        border-radius:$borderRadius;
        font-size:26px;
      }
    }
  }
  .crm-account-add-footer{
    height:150px;
    position:absolute;
    bottom:0px;
    width:100%;
    margin:0 auto;
    text-align:center;
    a{
      display:inline-block;
      width:160px;
      height:70px;
      text-align:center;
      line-height:70px;
      text-decoration:none;
      color:#fff;
      font-size:26px;
      border-radius:$borderRadius;
    }
    .resetBtn{
      background-color:#ed5f5c;
      margin-right:60px;
    }
    .submitBtn{
      background-color:#3399cc;
    }
  }
</style>