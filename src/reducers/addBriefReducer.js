import { } from '../constant/actionTypeConstant'

function addBriefReducer(state = {}, action){
    switch (action.type){
        case addCommentFooter : {
            const temp = state[action.articleId];
            return {...state, ...{[action.articleId]:
            {read: temp.read, like: temp.like, comment: temp.comment + 1}}};
        }
        case add
        default : {
            return state;
        }
    }
}