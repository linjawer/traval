<template>
  <div class="list" ref='wrapper'>
<div>
        <div class="area">
          <!-- 注意：其中的border-topbottom是上下都加上一个线条 -->
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <!-- 注意：其中的border-topbottom是上下都加上一个线条 -->
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
            <div class="item border-bottom">阿拉尔</div>
          </div>
        </div>
</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "CityList",
  mounted(){
      this.scroll=new BScroll(this.$refs.wrapper)
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/varibles.scss";
.border-topbottom {
  &::before {
    background-color: #ccc;
  }
  &::after {
    background-color: #ccc;
  }
}
.title {
  line-height: 0.4rem;
  background-color: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}
.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
  .button-wrapper {
    width: 33.33%;
    float: left;
    .button {
      margin: 0.1rem;
      text-align: center;
      border: 0.02rem solid #ccc;
      padding: 0.1rem 0;
      border-radius: 0.06rem;
    }
  }
}
.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
.list {
  //去除可以滚动的样式
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
