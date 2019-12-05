<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe608;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe614;</span>
            输入城市/景点/游玩主图
        </div>
        <router-link to='/city'>
            <div class="header-right">
                {{city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'HomeHeader',
    computed:{
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header{
        line-height: .86rem;
        display:flex;
        background: $bgColor;
        color: #fff;
        .header-left{
            width: .64rem;
            float: left;
            .back-icon{
                text-align: center;
                font-size: .4rem;
            }
        }
        .header-input{
            flex: 1;
            height: .64rem;
            line-height: .64rem;
            background: #fff;
            hegiht: .64rem;
            margin-top: .12rem;
            border-radius: .1rem;
            margin-left: .2rem;
            color: #ccc;
            padding-left: .2rem;
        }
        .header-right{
            color: #fff;
            min-width: 1.04rem;
            padding: 0 .1rem
            float: right;
            text-align:center;
            .arrow-icon{
                font-size: .24rem;
                margin-left:- .04rem
            }
        }
    }
</style>