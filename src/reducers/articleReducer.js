import { addArticle } from '../constant/actionTypeConstant'

function addArticleReducer(state = {}, action){
    switch (action.type) {
        case addArticle : {
            return {[action.articleId]: {title: action.title, content: action.content}};
        }
        default : {
            return state;
        }
    }
}

export default {
    addArticleReducer
}