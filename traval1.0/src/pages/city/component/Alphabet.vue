<template>
  <ul class="list">
      <li class="item" v-for="(item,key) of cities" :key='key'>{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props:{
      cities:Object
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/varibles.scss";
.list{
    // 这里的定位是让A条到右边
    position: absolute;
    top: 1.58rem;
    right:0;
    bottom:0;
    width: .4rem;
    // 这个样式是让字母垂直居中
    display: flex;
    flex-direction: column;
    justify-content: center;
    .item{
        text-align: center;
        line-height: .4rem;
        color: $bgColor;
    }

}

</style>
