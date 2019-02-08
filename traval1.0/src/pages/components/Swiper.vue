<template>
<!-- 为什么要加上div，是可以解决打开网页抖动的问题 -->
<div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
     <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>  
</template>

<script>
/* 组件导出 */
export default {
    name:'HomeSwiper',
    /* 在子组件上边定义的时候，data是一个函数 */
    /* 可以简化data(){} */
    data:function () {
        return{
            /* 初始化，让他是一个空对象，什么也没有 */
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            /* 因为vue是数据驱动的一个框架，页面显示什么完全可以由数组来决定 */
            swiperList:[{
               id:'0001',
               imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/267be9a1ae19513d08785f6676cd6886.jpg_890x330_0d5c047c.jpg'
            },{
               id:'0002',
               imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/03969572b09f9225382fe06a586cff51.jpg_890x330_68c510f6.jpg'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
/* padding-bottom就是图片的高度除以图片的宽度，就能够算出他的高度百分比，
为什么不直接在height加上值，如果要实现宽高比例自适应的话是需要这样写的，算出百分比。
*/  
/* 
注意：在scoped属性里边，要修改第三方插件的样式有两种方法：
1.用/deep/深度选择器，这个scss可以兼容
2.用穿透的模式来做：>>>
*/
/deep/.swiper-pagination-bullet-active{background: #fff!important} 
    .wrapper {
     width: 100%;
     height: 0;
     /* 宽高比例自适应 */
     padding-bottom: 37.1%;
     overflow: hidden;
    .swiper-img {
      width:100%;
  }
 }
</style>


