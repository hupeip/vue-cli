import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from './config'

// const REQ_HEADER = {'EIGHTFEET': 'Feet', 'Content-Type': 'application/json', 'gggggg': '121212112112'}
Vue.use(VueResource)

// http相关
Vue.http.options.root = API_ROOT
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true

// export const Resource = Vue.resource(API_ROOT + '{method}')

export const Resource = ({ url, body, method = 'post' }) => {
    // ES6 的 Promise 实现
    return new Promise((resolve, reject) => {
        Vue.http[method.toLowerCase()](
            API_ROOT + url,
            body, {
                emulateJSON: true
            })
            .then((res) => { // 从封装体中解构出data字段
                let data = res.data
                if (!data) { // 读取 undefined/null 的属性会报错
                    return resolve(null)
                }
                if (data._code) {
                  // return errHandler(data._msg);
                }
                resolve(data)
            }, (res) => {
                console.log('error')
            })
    })
}
