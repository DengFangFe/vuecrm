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
        msg:"我的列表"
      }
    }
  }
</script>
