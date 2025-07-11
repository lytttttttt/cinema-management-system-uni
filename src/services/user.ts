import { http } from '@/utils/http'
import type { UserInfo, UserLogin } from '@/types/user'

//登录接口
export const login = (data: UserLogin) => 
  http<UserInfo>({
    method: 'POST',
    url: '/login',
    data,
  })