import {request} from "./request";

/**
 * 登录
 * @param loginForm
 */
export function getUserLogin(loginForm) {
  return request({
    url: '/BBS/login.action',
    method: 'post',
    params: {
      userName: loginForm.userName,
      userPwd: loginForm.userPwd
    }
  })
}

/**
 * 注册
 * @param RegisterForm
 */
export function getUserRegister(RegisterForm) {
  return request({
    url: '/BBS/reg.action',
    method: 'post',
    params: {
      userName: RegisterForm.userName,
      userPwd: RegisterForm.userPwd,
      userMail: RegisterForm.userMail,
      userPhone: RegisterForm.userPhone
    }
  })
}

/**
 *  请求个人信息的粉丝数  我的帖子 等数据
 */
export function getUserinfodata(userName) {
  return request({
    url: 'BBS/userinfo.action',
    post: 'post',
    params: {
      userName
    }
  })
}

/**
 *  请求个人信息数据
 */
export function getUserdata(userName) {
  return request({
    url: 'BBS/user.action',
    post: 'post',
    params: {
      userName
    }
  })
}

/**
 *  请求个人信息中我的收藏
 */
export function getMySavedata(userName) {
  return request({
    url: 'BBS/selectcollect.action',
    post: 'post',
    params: {
      userName
    }
  })
}

/**
 *  修改个人信息
 */
export function updatePersonInfo(userForm) {
  return request({
    url: 'BBS/update.action',
    post: 'post',
    params: {
      userName: localStorage.getItem('userName'),
      reuserName: userForm.name,
      userMail: userForm.email,
      userPhone: userForm.tel,
      userIntroductory: userForm.userIntroductory
    }
  })
}

/**
 *  修改密码
 */
export function updatePwd(userName, olduserPwd, userPwd) {
  return request({
    url: 'BBS/updatepwd.action',
    post: 'post',
    params: {
      userName,
      olduserPwd,
      userPwd
    }
  })
}


/**
 *  我的粉丝
 */
export function selectMyfens(userName) {
  return request({
    url: 'BBS/selectfen.action',
    post: 'post',
    params: {
      userName,
    }
  })
}


/**
 *  我的关注
 */
export function selectFriends(userName) {
  return request({
    url: 'BBS/selectfriends.action',
    post: 'post',
    params: {
      userName,
    }
  })
}


/**
 *  添加关注
 */
export function getaddFocus(userId,friendsId) {
  return request({
    url: 'BBS/addfocus.action',
    post: 'post',
    params: {
      userId,
      friendsId
    }
  })
}


/**
 *  取消关注
 */
export function getcancelFocus(userId,friendsId) {
  return request({
    url: 'BBS/cancelfocus.action',
    post: 'post',
    params: {
      userId,
      friendsId
    }
  })
}
