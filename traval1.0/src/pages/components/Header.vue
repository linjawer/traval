<template>
<div class="header">
   <div class="header-left">
       <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
   </div>
 <router-link to='/city'>
       <div class="header-right">
           <!-- 这里的$store指的就是index.js里边的store -->
           <!-- {{ this.$store.state.city }} -->
           {{this.city}}
           <span class="iconfont arrow-icon">&#xe64a;</span>
       </div>
 </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
/* export defaul用于对外输出本模块（一个文件可以理解为一个模块）变量的接口 */
export default {
name:'HomeHeader',
// 这里是vuex的高级用法
computed:{
    ...mapState(['city'])
}
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/varibles.scss";
  /* 路径优化：@代表的是路径src,在这里引入其他的css样式,
  需要加上~@才可以
     varibles是全局变量 
  */
 .header{
     display: flex;
     line-height: 0.86rem;
     background: $bgColor;
     color:#fff;
     .header-left{
         width: 0.64rem;
         float: left;
         .back-icon{
            text-align: center;
            font-size: .4rem;//20px
         }
     }
     .header-input{
         flex: 1;
         margin-top: 0.12rem;
         height: .62rem;
         line-height: .62rem;
         background: #fff;
         border-radius: .1rem;
         margin-left: .2rem;
         color:#ccc;
         padding-left: .2rem;
     }
     .header-right{
         min-width: 1.04rem;
         padding: 0 .1rem;
         text-align: center;
         color:#fff;
         .arrow-icon{
             font-size: .24rem;
             margin-left: -.04rem;
         }
     }
 }
</style>