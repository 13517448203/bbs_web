import {request} from "./request";

/**
 *  写帖子
 */
export function upPostContent(content) {
  return request({
    url: '/BBS/forum/insert.action',
    post: 'post',
    params: {
      userName: content.userName,
      forumTitle: content.forumTitle,
      forumPath: content.forumPath,
      forumTypeId: content.forumTypeId
    }
  })
}

/**
 *  请求帖子详情数据
 */
export function getPostDetail(forumId) {
  return request({
    url: '/BBS/forum/details.action',
    post: 'post',
    params: {
      forumId
    }
  })
}
