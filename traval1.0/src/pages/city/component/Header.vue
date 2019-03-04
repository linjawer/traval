<template>
    <div  class="header">
       城市选择
    <router-link to='/'> <div class="iconfont header-back">&#xe624;</div></router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/varibles.scss";
.header{
    position: relative;
    overflow: hidden;
    text-align:center;
    height:$headerHeight;
    line-height:$headerHeight;
    color: #fff;
    background-color:$bgColor;
    font-size: .32rem;
    .header-back{
        width: .64rem;
        text-align:center;
        font-size: .4rem;
        position: absolute;
        color: #fff;
        top: 0;
        left: 0;
    }
}
</style>
