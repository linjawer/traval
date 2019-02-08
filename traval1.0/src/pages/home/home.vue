<template>
<!-- 模板文件 -->
<div>
   <!-- 下边定义的是大写，在这里写的是小写的，他会自动转换 -->
   <home-header></home-header>
</div>
</template>

<script>
import HomeHeader from '../components/Header'
/* export defaul用于对外输出本模块（一个文件可以理解为一个模块）变量的接口 */
export default {
 name:'home',
 /* 局部组件的应用 */
 components:{
     HomeHeader
     /* 如果是es6的语法的话，可以直接写上HomeHeader */
 } 
}
</script>

<style>
</style>


