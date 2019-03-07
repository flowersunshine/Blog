import { addPostList } from '../constant/actionTypeConstant'

function addPostListReducer(state = [], action) {
    switch (action.type) {
        case addPostList : {
            return action.postlist;
        }
        default : {
            return state;
        }
    }
}

export {
    addPostListReducer
}