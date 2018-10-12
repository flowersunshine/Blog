import { addVisit } from '../constant/actionTypeConstant'

function addVisitReducer(state = 0, action){
    switch (action.type){
        case addVisit : {
            return action.visitNum;
        }
        default : {
            return state;
        }
    }
}

export default { addVisitReducer }