import { useUserStore } from '@/stores'

const baseURL = 'http://localhost:8080'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 请求超时, 默认 60s
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4. 添加 token 请求头标识
    const userStore = useUserStore()
    const token = userStore.userToken
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

type Data<T> = {
  code: number; // 状态码
  message: string; // 提示信息
  data: T; // 数据
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        // 成功回调
        if (res.statusCode === 200) {
          resolve(res.data as Data<T>)
        } else {
          reject(new Error(`请求失败，状态码：${res.statusCode}`))
        }
      },
      fail: (err) => {
        // 失败回调
        reject(err)
      },
    })
  })
}