<template>
<div>
        <div class="banner" @click="nnn">
            <img class="banner-img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2593029726,847983021&fm=26&gp=0.jpg" alt="" />>   
            <div class="banner-info">
                <div class="banner-title">39</div>
                <div class="banner-number">
                     <span class="iconfont">&#xe632;</span>
                     38
                </div>
            </div>
        </div>
        <common-gallary :tt='misi' v-if="xx" @change='bbb'></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
   name:'DeatilBanner',
   data(){
        return {
            misi:[
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2593029726,847983021&fm=26&gp=0.jpg",
                "http://img1.imgtn.bdimg.com/it/u=471991976,3014571539&fm=26&gp=0.jpg"
            ],
            xx:false
        }
    
   },
   components:{
      CommonGallary
   },
   methods:{
       nnn(){
           this.xx=true;
       },
       bbb(){
            this.xx=false;
       }
   }
}
</script>

<style lang='scss' scoped>
.banner{
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;
    .banner-img{
        width: 100%;
    }
    .banner-info{
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: .6rem;
        color: #fff;
        background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
        .banner-title{
            flex: 1;
            font-size: .32rem;
            padding: 0.4rem;
        }
        .banner-number{
            padding: 0.4rem;
            line-height: .4rem;
            height: .4rem;
            border-radius: .2rem;
            background: rgba(0,0,0,.8);
        }
    }
}

</style>
