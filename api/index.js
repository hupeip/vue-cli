// import {Resource} from './resource.js'
// export default{
//     showJobList (data) {
//         return Resource.save({ method: 'resume_indexJobList' }, data)
//     },
//     login (data) {
//         return Resource.save({ method: 'User_Login' }, data)
//     }
// }

// 引入superagent的Promise 实现
import {Resource} from './superagent'
export default{
    showJobList (param) {
        return Resource({
            // method: 'post',
            url: 'resume_indexJobList',
            body: param
        })
    },
    login (param) {
        return Resource({
            method: 'post',
            url: 'User_Login',
            body: param
        })
    }
}
