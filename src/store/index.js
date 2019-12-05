import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions:{
        changeCity(ctx,city){
            console.log(ctx);
           ctx.commit('changeCity',city);
        }
    },
    mutations
})