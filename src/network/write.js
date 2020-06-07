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

/**
 *  请求帖子评论数据
 */
export function getPostComment(forumId) {
  return request({
    url: '/BBS/forum/forumcomment.action',
    post: 'post',
    params: {
      forumId

    }
  })
}


/**
 *  添加评论
 */
export function insertComment(forumId,commenterName,commentPath) {
  return request({
    url: '/BBS/forum/insertcomment.action',
    post: 'post',
    params: {
      forumId,
      commenterName,
      commentPath
    }
  })
}


/**
 *  评论点赞+1
 */
export function addCommentCike(commentId) {
  return request({
    url: '/BBS/forum/addcommentlike.action',
    post: 'post',
    params: {
      commentId,
    }
  })
}


/**
 *  查询帖子详情页 点赞 收藏关注状态
 */
export function detailsStatus(forumId,userId) {
  return request({
    url: '/BBS/forum/detailsstatus.action',
    post: 'post',
    params: {
      forumId,
      userId
    }
  })
}


/**
 *  添加收藏
 */
export function addCollectForum(forumId,collectorId) {
  return request({
    url: '/BBS/forum/addcollectforum.action',
    post: 'post',
    params: {
      forumId,
      collectorId
    }
  })
}


/**
 *  取消收藏
 */
export function cancelCollectForum(forumId,collectorId) {
  return request({
    url: '/BBS/forum/cancelcollectforum.action',
    post: 'post',
    params: {
      forumId,
      collectorId
    }
  })
}


/**
 *  取消帖子点赞
 */
export function cancelLikeForum(forumId,likerId) {
  return request({
    url: '/BBS/forum/cancellikeforum.action',
    post: 'post',
    params: {
      forumId,
      likerId
    }
  })
}


/**
 *  取消帖子点赞
 */
export function insertLikeForum(forumId,likerId) {
  return request({
    url: '/BBS/forum/insertlikeforum.action',
    post: 'post',
    params: {
      forumId,
      likerId
    }
  })
}


/**
 *  图片验证码验证
 */
export function validateImageCode(imageCode) {
  return request({
    url: '/BBS/forum/validateimagecode.action',
    post: 'post',
    params: {
      imageCode,
    }
  })
}