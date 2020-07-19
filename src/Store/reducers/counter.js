import * as actionType from '../action';


const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionType.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionType.DECREMENT:
            return{
                ...state,
                counter: state.counter + 1
               }
        case actionType.ADD:
            return{
                ...state,
                counter: state.counter + action.val
            }
        case actionType.SUBSTRACT:
            return{
                ...state,
                counter: state.counter - action.val
            }
    }
 
    return state;
}

export default counterReducer;
