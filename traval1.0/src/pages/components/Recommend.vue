<template>
<div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <router-link tag='li' :to="'/detail/'+item.id" class="item border-bottom" v-for="item of recom" :key='item.id'>
            <img class="item-img-wrapper"  :src="item.imgUrl">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </router-link>
    </ul>
</div>    
</template>

<script>
import img from "../../assets/img/123.jpg"
export default {
    name:'HomeRecommend',
    props:{
         recom:Array
    },
    data (){
        return {
        //    recommendList:[{
        //        id:'0001',
        //        imgurl:img,
        //        title:'大连圣亚海洋世界',
        //        desc:'浪漫广州首站,浪漫的海洋主题公园'
        //    },
        //    {
        //        id:'0002',
        //        imgurl:img,
        //        title:'大连圣亚海洋世界',
        //        desc:'浪漫广州首站,浪漫的海洋主题公园'
        //    },
        //    {
        //        id:'0003',
        //        imgurl:img,
        //        title:'大连圣亚海洋世界',
        //        desc:'浪漫广州首站,浪漫的海洋主题公园'
        //    }]    
        }
    }
}
</script>

<style lang='scss' scoped>
  .recommend-title{
    line-height: .8rem;//20px
    background-color: #eee;
    text-indent:.2rem;
  }
  .item{
      display: flex;
      height: 1.9rem;
      .item-img-wrapper{
         width: 1.7rem;
         height: 1.7rem;
         padding: .1rem;
      }
      .item-info{
          flex: 1;
          padding: .1rem;
          .item-title{
              line-height: .54rem;
              font-size: .32rem;
          }
          .item-desc{
              line-height: .4rem;
              color: #ccc;
               overflow: hidden;
             white-space: nowrap;
             text-overflow: ellipsis;
          }
          .item-button{
              margin-top: .2rem;
              background: #ff9300;
              padding: .04rem;
              border-radius: .06rem;
              color: #fff;
          }
      }
  }
</style>


