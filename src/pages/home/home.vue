<template>
    <div>
        <HomeHeader ></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <HomeRecommend :list="recommendList"></HomeRecommend>
        <HomeWeekend :list="weekendList"/>
    </div>
</template>

<script>
import axios from 'axios';
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
import { mapState } from 'vuex';

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return{
            lastCity: '',
            swiperList: [],
            iconList : [],
            recommendList: [],
            weekendList: []
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('/static/mock/index.json?city='+this.city)
                .then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res){
            res = res.data;
            if( res.ret && res.data){
                const data = res.data;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
        }
    },
    mounted(){
        this.lastCity = this.city;
        this.getHomeInfo();
    },
    activated(){
        if(this.lastCity != this.city){
            this.lastCity = this.city;
            this.getHomeInfo();
        }
    }
}
</script>

<style>
</style>