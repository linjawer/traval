<template>
  <div class="container" @click="mmb">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in tt" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  //这里是接收父亲传过来的参数
  props: {
    tt: {
      type: Array,
    //如果不是的话就返回一个空数组   
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      /* 初始化，让他是一个空对象，什么也没有 */
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction"
      }
    };
  },
  methods:{
      mmb(){
          this.$emit('change')
      }
  }

};
</script>

<style lang='scss' scoped>
// .container >>> .swiper-pagination {
//   overflow: inherit;
// }
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #ccc;
  z-index: 999;
  .wrapper {
    background: #fff;
    width: 100%;
    height: 0;
    // overflow: hidden;
    padding-bottom: 100%;
  }
//   .swiper-pagination {
//     color: pink;
//     bottom: -0.8rem;
//   }
}
</style>
