import { addPostList, addComment, addBrief, addLike, addRead, addCommentFooter, addArticle, getComments, addVisit } from '../constant/actionTypeConstant';
import axios from '../axios/axios';
// 接收到文章列表
function receivePostListAction(postlist){
    return {
        type: addPostList,
        postlist
    }
}
// 从网络请求postlist
function getPostListAction(){
    return (dispatch, getState) => {
        return axios.getPostList().then(res => {
            dispatch(receivePostListAction(res.data.postlist));
        });
    }
}
// 添加一条评论,服务端将该条评论添加到数据库，然后返回该文章的所有评论，这么做的一个原因就是要更新评论区，因为当你在看文章的时候可能其他人已经添加了其他的评论，而你不知道，所以借着这机会刷新评论区
function addCommentAction(content, articleId){
    return (dispatch, getState) => {
        return axios.addComment(articleId, content).then(res => {
            dispatch(receiveCommentsAction(articleId, res.data));
        });
    }
}
// 获取文章的评论列表
function receiveCommentsAction(articleId, comments){
    return {
        type: getComments,
        articleId,
        comments
    }
}
// 从网络请求文章评论列表
function getCommentsAction(articleId){
    return (dispatch, getState) => {
        return axios.getComments(articleId).then(res => {
            dispatch(receiveCommentsAction(articleId, res.data));
        });
    }
}
// 取得文章的简单信息，比如评论次数，阅读次数，喜欢次数
function receiveBriefAction(articleId, brief){
    return {
        type: addBrief,
        brief,
        articleId
    }
}
// 从服务端拉取文章的简单信息
function getBriefAction(articleId){
    return (dispatch, getState) => {
        return axios.getAncillaryInfoAndComment(articleId).then(res => {
            dispatch(receiveBriefAction(articleId, res.data));
        });
    }
}
// 向服务端发送喜欢的动作
function addLikeAction(articleId){
    return (dispatch, getState) => {
        return axios.addLike(articleId).then(res => {
            console.log(res);
        });
    }
}
// 向服务端发送已经阅读的动作
function addReadAction(articleId){
    return (dispatch, getState) => {
        return axios.addRead(articleId).then(res => {
            console.log(res);
        });
    }
}
function addCommentFooterAction(articleId){
    return {
        type: addCommentFooter,
        articleId
    }
}
// 取得文章详情
function receiveArticleAction(articleId, article){
    return {
        type: addArticle,
        articleId,
        article
    }
}
// 从服务端拉取文章详细信息
function getArticleAction(articleId){
    return (dispatch, getState) => {
        return axios.getArticle(articleId).then(res => {
            dispatch(receiveArticleAction(articleId, res.data))
        });
    }
}
// 取得网站访问次数
function receiveWebsiteAction(visitNum){
    return {
        type: addVisit,
        visitNum
    }
}
// 从服务端拉取网站的访问次数
function getVisitAction(){
    return (dispatch, getState) => {
        return axios.getVisit().then(res => {
            dispatch(receiveWebsiteAction(res.data));
        });
    }
}
export default {
    addArticleAction, addBriefAction, addCommentAction, addCommentFooterAction, addLikeAction, addPostListActions, 
    addReadAction, getPostListAction, getCommentsAction, getBriefAction, getVisitAction, getArticleAction
}