<template>
<!-- 模板文件 -->
<div>
   <!-- 下边定义的是大写，在这里写的是小写的，他会自动转换 -->
   <home-header></home-header>
   <home-swiper></home-swiper>
   <home-icons></home-icons>
</div>
</template>

<script>
import HomeHeader from '../components/Header'
/* 引入的轮播图的组件 */
import HomeSwiper from '../components/Swiper'
/* export defaul用于对外输出本模块（一个文件可以理解为一个模块）变量的接口 */
import HomeIcons from '../components/Icons'
/* 引入图标区域文件 */
export default {
 name:'home',
 /* home.vue是首页的大组件*/
 components:{
     HomeHeader,
     /* 如果是es6的语法的话，可以直接写上HomeHeader */
     HomeSwiper,
     /* 引入图标区域文件 */
     HomeIcons
 } 
}
</script>

<style>
</style>


