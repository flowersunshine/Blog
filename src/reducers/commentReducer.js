import { getComments } from '../constant/actionTypeConstant'
function addCommentReducer(state = {}, action){
    switch (action.type) {
        case getComments : {
            return {[action.articleId]: action.comments};
        }
        default : {
            return state;
        }
    }
}

export {
    addCommentReducer
}