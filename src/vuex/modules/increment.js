import * as types from '../mutation-types'

// state
const state = {
    count: 0,
    msg: ''
}

// mutations
const mutations = {
    [types.INCREMENT] (state) {
        state.count++
    },
    [types.UPDATECOUNT] (state, data) {
        state.count = data
    },
    [types.LOGIN] (state, data) {
        state.msg = data
    }
}

export default {
    state,
    mutations
}
