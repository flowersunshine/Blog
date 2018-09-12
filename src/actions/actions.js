import { addPostList, addComment, addBrief, addLike, addRead, addCommentFooter, addArticle } from '../constant/actionTypeConstant';

function addPostListActions(postlist){
    return {
        type: addPostList,
        postlist
    }
}
function addCommentAction(content, articleId){
    return {
        type: addComment,
        content,
        articleId
    }
}
function addBriefAction(articleId, brief){
    return {
        type: addBrief,
        brief,
        articleId
    }
}
function addLikeAction(articleId){
    return {
        type: addLike,
        articleId
    }
}
function addReadAction(articleId){
    return {
        type: addRead,
        articleId
    }
}
function addCommentFooterAction(articleId){
    return {
        type: addCommentFooter,
        articleId
    }
}
function addArticleAction(articleId, content){
    return {
        type: addArticle,
        articleId,
        content
    }
}

export default {
    addArticleAction, addBriefAction, addCommentAction, addCommentFooterAction, addLikeAction, addPostListActions, 
    addReadAction
}