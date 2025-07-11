import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfo } from '@/types/user'

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    const userToken = ref('')
    const setUserInfo = (newInfo: UserInfo) => {
      userInfo.value = newInfo
      userToken.value = newInfo.token
    }
    const clearUserInfo = () => {
      userInfo.value = ''
      userToken.value = ''
    }
    // 记得 return
    return {
      userInfo,
      userToken,
      setUserInfo,
      clearUserInfo
    }
  },
  // 持久化
  {
    // 网页端配置
    // persist: true,
    // 小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
