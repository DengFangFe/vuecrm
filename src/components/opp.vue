<template>
  <div>
    <span>{{msg}}</span>
  </div>
</template>
<script>
  import $ from 'webpack-zepto';
  export default{
    name:'account',
    data(){
      return{
        msg:"商机列表"
      }
    }
  }
</script>
