<template>
  <div class="icons">
    <!-- 当图标有9个的时候，可以像轮播图一样的切换 -->
    <swiper>  
      <swiper-slide v-for="(page,index) of icon" :key="index">   
    <div class="icon" 
         v-for='item of icon'
         :key="item.id"
         >
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl">
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </div>
     </swiper-slide>   
    </swiper> 
  </div>
</template>
<script>
import img from "../../assets/img/j1.png"
export default {
  name: "HomeIcons",
  props:{
    icon:Array
  },
  data: function() {
    return {
        // iconList:[{
        //  id:'0001',
        //  imgUrl:img,
        //  desc:'景点门票'
        // },{
        //  id:'0002',
        //  imgUrl:img,
        //  desc:'景点门票'
        // },{
        //  id:'0003',
        //  imgUrl:img,
        //  desc:'景点门票'
        // },{
        //  id:'0004',
        //  imgUrl:img,
        //  desc:'景点门票'
        // },{
        //  id:'0005',
        //  imgUrl:img,
        //  desc:'景点门票'
        // },{
        //  id:'0006',
        //  imgUrl:img,
        //  desc:'景点门票'
        // },{
        //  id:'0007',
        //  imgUrl:img,
        //  desc:'景点门票'
        // },{
        //  id:'0008',
        //  imgUrl:img,
        //  desc:'景点门票'
        // },{
        //  id:'0009',
        //  imgUrl:img,
        //  desc:'景点门票'
        // }]
    };
  },
  computed:{
    pages (){
       const pages=[];
       this.iconList.forEach((item,index)=>{
         /* 显示的是0里边放了8个,在1里边放了一个 */
          const page=Math.floor(index/8);
          if(!pages[page]){
            pages[page]=[];
          }
          pages[page].push(item)
       })
       return pages
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/varibles.scss";
/deep/.swiper-container{
  height: 0;
  padding-bottom: 50%;
  // background-color: pink;
}
  .icon {
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    // background-color: red;
    position: relative;
    height: 0;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -0.4rem;
      line-height: 0.44rem;
      height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      /* 文字多加上省略号的 */
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>