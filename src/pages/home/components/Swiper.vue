<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name:'HomeSwiper',
  props:{
    list: Array
  },
  data(){
    return{
      swiperOption:{
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed:{
    showSwiper(){
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active{
    background: #fff;
  }
  .wrapper{
    overflow:hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #eee;

    .swiper-img{
      width:100%;
    }
  }
</style>

// https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1715572434,47115574&fm=26&gp=0.jpg
// https://img.zcool.cn/community/01c1f45a604179a8012113c79a2fc6.jpg@1280w_1l_2o_100sh.jpg