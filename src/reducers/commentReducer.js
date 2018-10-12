import { addComment } from '../constant/actionTypeConstant'
function addCommentReducer(state = {}, action){
    switch (action.type) {
        case addComment : {
            return {[action.articleId]: action.comments};
        }
        default : {
            return state;
        }
    }
}

export default {
    addCommentReducer
}