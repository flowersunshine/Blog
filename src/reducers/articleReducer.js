import { addArticle } from '../constant/actionTypeConstant'

function addArticleReducer(state = {}, action){
    switch (action.type) {
        case addArticle : {
            return {[action.articleId]: {title: action.article.title, content: action.article.html}};
        }
        default : {
            return state;
        }
    }
}

export {
    addArticleReducer
}