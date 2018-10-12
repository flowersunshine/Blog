import { addBrief } from '../constant/actionTypeConstant'

function addBriefReducer(state = {}, action){
    switch (action.type){
        case addBrief : {
            return {[action.articleId]: action.brief};
        }
        default : {
            return state;
        }
    }
}

export default {
    addBriefReducer
}