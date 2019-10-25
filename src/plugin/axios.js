import axios from 'axios'
import VueAxios from 'vue-axios'
import url from '../assets/url/url'

axios.defaults.baseURL = process.env.VUE_APP_BASRURL
axios.defaults.timeout = 12000 // 请求超时时间
const $axios = {
    install(Vue) {
        Vue.prototype.$url = url
        Vue.use(VueAxios, axios);
    }
}
axios.interceptors.request.use(config => {
    return config
    // 请求之前做些什么
}, function (error) {
    return Promise.reject(error)
})
axios.interceptors.response.use(response => {
    const {
        status
    } = response
    const { code } = response.data
    if (status === 200 && code == '0000') {
        return response.data
    }

    // 请求失败成功统一判断处
}, function (error) {
    window.location.hash = '/error'
    return Promise.reject(error)
})
export default $axios
