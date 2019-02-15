<template>
<div class="header">
  城市选择
  <div>
       <router-link to='/'> 
        <div class="iconfont header-icon">&#xe624;</div>
       </router-link>
  </div>
</div>
</template>
<script>
export default {
name:'CityHeader'    
}
</script>
<style lang='scss' scoped>
@import "~@/assets/styles/varibles.scss";
 .header{
    position: relative;
    overflow: hidden;
    height: .86rem;
    line-height: .86rem;
    color: #fff;
    background-color: $bgColor;
    font-size: .32rem;
    text-align: center;
    .header-icon{
        width: .64rem;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        font-size: .4rem;
        color: #fff;
    }
 }
</style>

