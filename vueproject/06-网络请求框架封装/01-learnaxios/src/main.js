import Vue from 'vue'
import App from './App'
import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1
//   },
//   method:'get'
// }).then(res => {
//   console.log(res)
// })

//并发请求
// axios.all([axios({ url: 'http://123.207.32.32:8000/home/multidata' }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   },
// })]).then(result => {
//   console.log(result[0])
//   console.log(result[1])
// })

//全局
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   },
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })

// request({
//   url: '/home/multidata'
// }, success => console.log(success),
//   failture => console.log(failture)
// )

// request({
//   baseConfig: '/home/multidata',
//   success: function (res) {
//     console.log(res)
//   },
//   failure: function (err) {
//     console.log(err)
//   }
// }
// )

request({ url: '/home/multidata' }).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
