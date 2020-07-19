export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () =>{
    return {
        type: INCREMENT
    };
};

export const decrement = () =>{
    return {
        type: DECREMENT
    };
};

export const add = (res) =>{
    return {
        type: ADD,
        val: res
    };
};

export const substract = (subres) =>{
    return {
        type: SUBSTRACT,
        val: subres
    };
};

export const saveResult = (value) =>{
    return{
        type: STORE_RESULT,
        result: value
    }
}
export const storeResult = (value) =>{
    return dispatch =>{
       setTimeout(()=>{
           dispatch(saveResult(value));
       },2000)
    };
};

export const deleteResult = (value) =>{
    return {
        type: DELETE_RESULT,
        resultElId: value
    };
};