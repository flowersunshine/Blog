import { addArticle } from '../constant/actionTypeConstant'

function addArticleReducer(state = {}, action){
    switch (action.type) {
        case addArticle : {
            return {...state,...{
                [action.articleId]: {articleId: action.articleId, content: action.content}
            }};
        }
        default : {
            return state;
        }
    }
}

export default {
    addArticleReducer
}