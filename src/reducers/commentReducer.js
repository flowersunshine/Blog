import { addComment, addCommentFooter } from '../constant/actionTypeConstant'
function addCommentReducer(state = {}, action){
    switch (action.type) {
        case addComment : {
            return {...state, ...{[action.articleId]: 
                {content: action.content,date: action.date, articleId: action.articleId,_id: action._id}}};
        }
        default : {
            return state;
        }
    }
}

export default {
    addCommentReducer
}