import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import increment from './modules/increment'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        increment
    }
    // state: {
    //     count: 2
    // },
    // getters: {
    //     increment: state => {
    //         return state.count++
    //     }
    // },
    // mutations: {
    //     increment (state) {
    //         state.count++
    //     }
    //     // [INCREMENT] (state) {
    //     //     state.count++
    //     // }
    // },
    // actions: {
    //     increment (context) {
    //         context.commit('increment')
    //     }
    // }
})

module.exports = store
