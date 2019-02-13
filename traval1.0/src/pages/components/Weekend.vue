<template>
<div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
            <div class="item-img-wrappers">
               <img class="item-img-wrapper" :src="item.imgurl">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <!-- <button class="item-button">查看详情</button> -->
            </div>
        </li>
    </ul>
</div>    
</template>

<script>
import img from "../../assets/img/123.jpg"
export default {
    name:'HomeWeekend',
    data (){
        return {
           recommendList:[{
               id:'0001',
               imgurl:img,
               title:'大连圣亚海洋世界',
               desc:'浪漫广州首站,浪漫的海洋主题公园'
           },
           {
               id:'0002',
               imgurl:img,
               title:'大连圣亚海洋世界',
               desc:'浪漫广州首站,浪漫的海洋主题公园'
           },
           {
               id:'0003',
               imgurl:img,
               title:'大连圣亚海洋世界',
               desc:'浪漫广州首站,浪漫的海洋主题公园'
           }]    
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
    .item-img-wrappers{
        height: 0;
        overflow: hidden;
        /* 图片的宽高比 */
        padding-bottom: 33.9%;
        .item-img-wrapper{
          width: 100%;
      }
      }
 
      .item-info{
        //   flex: 1;
          padding: .1rem;
          .item-title{
              line-height: .54rem;
              font-size: .32rem;
          }
          .item-desc{
              line-height: .4rem;
              color: #ccc;
          }
      }
  }
</style>


