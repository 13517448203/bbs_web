import {request} from "./request";

/**
 *  请求首页综合帖子数据
 */
export function getHomePostData(forumTypeId) {
  return request({
    url: '/BBS/forum/queryall.action',
    post: 'post',
    params: {
      forumTypeId
    }
  })
}

/**
 *  请求首页精华帖子数据
 */
export function getHomeBestPostData(forumTypeId) {
  return request({
    url: '/BBS/forum/queryplus.action',
    post: 'post',
    params: {
      forumTypeId
    }
  })
}

/**
 *  请求首页置顶数据
 */
export function getHomeTopData() {
  return request({
    url: '/BBS/forum/querytop.action',
    post: 'post'
  })
}

/**
 *  请求热议数据
 */
export function getHomeWeeksHotData() {
  return request({
    url: '/BBS/forum/queryweek.action',
    post: 'post'
  })
}

/**
 * 根据搜索内容查询帖子
 */
export function getPostSearchData(forumSearch) {
  return request({
    url: '/BBS/forum/search.action',
    post: 'post',
    params: {
      forumTypeId
    }
  })
}