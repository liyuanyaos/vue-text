/* eslint-disable prettier/prettier */
//对axios做一些配置
import axios from "axios";
import axiosRetry from "axios-retry";
import stroe from '@/store/index'
//axios.create返回值一个新的axios的实例
// eslint-disable-next-line no-unused-vars
const request = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'http://111.229.247.11:3000',
});

// eslint-disable-next-line no-undef
axiosRetry(request, {
    retries: 3
})

request.interceptors.request.use((config) => {
    // console.log(config);
    //config是你每一次发送请求的详细配置(请求的地址、请求的路径、请求的参数)
    //在这个位置可以对请求做出修改
    const cookie = stroe.state.auth.cookie;
    if (cookie) {
        if (config.method === "post") {
            config.data || (config.data = {});
            config.data.cookie = cookie;
        }
        if (config.method === "get") {
            config.params || (config.params = {});
            config.params.cookie = cookie;
        }
    }
    return config;
})
// eslint-disable-next-line no-undef
export default request
//_axios和axios 99%功能一致
// window.axios = axios;
// window._axios = axios;