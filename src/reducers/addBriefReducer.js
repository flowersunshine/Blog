import { addCommentFooter, addRead, addLike } from '../constant/actionTypeConstant'

function addBriefReducer(state = {}, action){
    const temp = state[action.articleId];
    switch (action.type){
        case addCommentFooter : {
            return {...state, ...{[action.articleId]:
            {read: temp.read, like: temp.like, comment: temp.comment + 1}}};
        }
        case addRead : {
            return {...state, ...{[action.articleId]:
                {read: temp.read + 1, like: temp.like, comment: temp.comment}}};
        }
        case addLike : {
            return {...state, ...{[action.articleId]:
                {read: temp.read, like: temp.like + 1, comment: temp.comment}}}; 
        }
        default : {
            return state;
        }
    }
}

export default {
    addBriefReducer
}