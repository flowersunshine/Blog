import { addBrief } from '../constant/actionTypeConstant'

function addBriefReducer(state = {}, action){
    switch (action.type){
        case addBrief : {
            return {...state, ...{[action.articleId]: action.brief}};
        }
        default : {
            return state;
        }
    }
}

export {
    addBriefReducer
}