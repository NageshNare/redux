import * as actionType from '../action';


const initialState = {
    result: []
}
const resultReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionType.STORE_RESULT:
            return{
                ...state,
                result: state.result.concat({id: new Date(), value: action.result})

            }
        case actionType.DELETE_RESULT:
            const updatedArray = state.result.filter(result => result.id !== action.resultElId)
            return{
                ...state,
                result: updatedArray

            }
    }
 
    return state;
}

export default resultReducer;
