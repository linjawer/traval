<template>
 <div>
       <div class="search">
           <input v-model='keyword' class="search-input" type="text" placeholder="输入城市名或者拼音">
       </div>
          <div class='search-content' 
               ref='search'
               v-show='keyword'
               >
               <ul>
                   <li class='yansji'  v-for='(item,index) in list' :key='index'>
                        {{item.name}}
                   </li>
                   <li class='search-content nomath' v-show='hansNoDate'>
                       没有找匹配的数字
                   </li>
               </ul>
            </div> 
 </div>
</template>

<script>
//1.引入一个滚动事件的方法
import Bscroll from 'better-scroll'
export default {
   name:'CitySearch',
   props:{
    //这里是接收父亲的数据
    cities:Object
   },
   data(){
      return{
        //其中绑定的keyword的值是与input双向绑定的
          keyword:'',
          list:'',
        //定义一个急流函数
          timer:null  
      }
   },
   //监听事件    
   watch:{
    // 监听keyword的改变
    keyword(){
       if(this.timer){
           clearTimeout(this.timer)
       }
    //    这个判断的是输入a搜索的时候出现列表，但是a删掉的时候，列表还是依然存在的，所以要做一个判断
       if(!this.keyword){
           this.list=[]
           return;
       }
       this.timer=setTimeout(()=>{
        //定义一个空数组
        const result=[];
        for(let i in this.cities){
        //记得里边的i输出的是键，其中定义的this.ciyies[i]输出的就是指
        this.cities[i].forEach((value) => {
            console.log(value);
            // 其中的spell和name是json里边的数据
            if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                result.push(value)
            }
        });
        }
        this.list=result
       },100)
    }
   },
//    因为在标签里边写的是计算属性不太合理
   computed:{
        hansNoDate(){
            return !this.list.length
        }
   },
//这里要实现的功能就是输入查找的的时候，页面是无法滚动的，所以要借助mounted要实现页面的滚动
    mounted(){
    //  2.创建scroll的方法,在括号里边传入一个dom元素进去，用的是ref
    this.scroll=new Bscroll(this.$refs.search)  
    }    
}
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/varibles.scss";
.search{
    height:.72rem;
    background-color: $bgColor;
    padding: 0.1rem;
    .search-input{
        width: 100%;
        height: .62rem;
        text-align: center;
        border-radius: .06rem;
        line-height: .62rem;
        color: #666;
        padding: 0 .1rem;
        box-sizing: border-box;
    }
}
.search-content{
        position: absolute;
        overflow: hidden;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        z-index: 1;
        .yansji{
            background-color: #fff;
            line-height: 0.5rem;
            margin-top: 0.1rem;
        }
        .nomath{
            text-align: center;
            color: black;
            font-size: 0.4rem;
            margin-top: -1.2rem;
        }
    }
</style>