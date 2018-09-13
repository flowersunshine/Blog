import { addPostList } from '../constant/actionTypeConstant'

function addPostListReducer(state = [], action) {
    switch (action.type) {
        case addPostList : {
            return state.concat(action.postlist);
        }
        default : {
            return state;
        }
    }
}

export default {
    addPostListReducer
}