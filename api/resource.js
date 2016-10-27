import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from './config'

Vue.use(VueResource)

// http相关
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true

export const Resource = Vue.resource(API_ROOT + '{method}')

// export const Resource = (method, param) => {
//     resource.save({ method: method }, param).then(response => {
//         return JSON.parse(response.data)
//     }, response => {
//         console.log('error')
//     })
// }
