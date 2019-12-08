import fetch from '../config/fetch'

/**
 *测试登录
**/
export const testLogin = (username,password) => fetch('/user_center/api/login',{
  username: username,
	password: password,
},'POST');





