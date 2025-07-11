/** 用户登录请求参数 */
export type UserLogin = {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** 用户身份 */
  roleId: UserRole;
}

/** 登录后获取的用户参数 */
export type UserInfo = {
  /** 用户ID */
  id: number;
  /** token令牌 */
  token: string;
  /** 账号 */
  username: string;
  /** 用户身份 */
  roleId: UserRole;
}

/** 用户身份枚举 */
export enum UserRole {
  /** 普通用户 */
  User = 0,
  /** 员工 */
  Employee = 1,
  /** 管理员 */
  Admin = 2,
}