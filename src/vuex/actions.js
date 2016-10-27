import * as types from './mutation-types'
import api from '../../api'

export const add = ({ commit }) => {
    commit(types.INCREMENT)
}

export const updateCount = ({ commit }, data) => {
    commit(types.UPDATECOUNT, data)
}

export const login = ({commit}, param) => {
    api.showJobList(param).then(response => {
        var data = response.json()
        console.log(data)
        // commit(types.LOGIN, response.msg)
    }, response => {
        console.log('error')
    })
}
