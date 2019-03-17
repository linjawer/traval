<template>
<!-- 模板文件 -->
<div>
   <!-- 下边定义的是大写，在这里写的是小写的，他会自动转换 -->
   <!-- <home-header :city="city"></home-header> -->
   <!-- ****用vuex做的改变，没使用vuex的是上边的数据 -->
   <home-header></home-header>
   <home-swiper :list='swiperList'></home-swiper>
   <home-icons :icon='iconList'></home-icons>
   <home-recommend :recom='recommendList'></home-recommend>
   <home-weekend :week='weekendList'></home-weekend>
</div>
</template>
<script>
import HomeHeader from '../components/Header'
/* 引入的轮播图的组件 */
import HomeSwiper from '../components/Swiper'
/* export defaul用于对外输出本模块（一个文件可以理解为一个模块）变量的接口 */
import HomeIcons from '../components/Icons'
/* 引入图标区域文件 */
import HomeRecommend from '../components/Recommend'
/* 引入周末组件 */
import HomeWeekend from '../components/Weekend'
/* 引入ajax请求,axios */
import axios from 'axios'

// 引入vuex
import { mapState } from 'vuex'
export default {
 name:'home',
 /* home.vue是首页的大组件*/
 components:{
     HomeHeader,
     /* 如果是es6的语法的话，可以直接写上HomeHeader */
     HomeSwiper,
     /* 引入图标区域文件 */
     HomeIcons,
     /* 引入热销的样式 */
     HomeRecommend,
     /* 引入周末组件 */
     HomeWeekend
 },
 data(){
     return{
        //  ****使用vuex的数据，city的数据是去掉的
        //  city:'',
         lastCity:"",
         swiperList:[],
         iconList:[],
         recommendList:[],
         weekendList:[]
     }
 },
 methods:{
     /* 通过这个方法去请求ajax的数据,方法是定义在methods里边的 */
     getHomeInfo(){
         /* .then()异步执行,请求回来的函数，就是不用去等数据，直接执行 */
         axios.get('/mock/city.json?city=' + this.city)
           .then(this.getHomeInfoSucc)
      },
      getHomeIndex(){
          axios.get('/mock/index.json')
              .then(this.getHomeInde)
      },
      getHomeInfoSucc(res){
        //   console.log(res)
          res=res.data;
          if(res.ret&&res.data){
              const data=res.data;
            //   this.city=data.hotCities[0].name;
          }
      },
      getHomeInde(res){
        //   console.log(res);
          res=res.data
          if(res.ret&&res.data){
              const data=res.data;
              this.swiperList=data.swiperList;
              this.iconList=data.iconList;   
              this.recommendList=data.recommendList;
              this.weekendList=data.weekendList;
          }  
      }
 },
    computed:{
        ...mapState(['city'])
      },
 mounted(){
    /* 这个生命周期函数的意思就是模板渲染之后调用 */
    this.lastCity=this.city
    this.getHomeInfo() 
    this.getHomeIndex()
 },
 activated(){
  if(this.lastCity !== this.city){
     this.lastCity=this.city
     this.getHomeInfo() 
  }
 }
}
</script>

<style>
</style>


