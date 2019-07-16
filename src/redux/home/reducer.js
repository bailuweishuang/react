import * as actiontype from './action-type'
/*
* 初始化state
 */

const initState = {
    count: 0
};
/*
* reducer
 */
 export const reducer =(state = initState, action)  =>{
     console.log(action,1)
    switch (action.type) {
        case actiontype.INCREMENT:
            return {
                ...state, ...{count: action.value}
            };
        case actiontype.DECREMENT:
            return {
                count: state.count - 1
            };
        case actiontype.RESET:
            return {count: 0};
        default:
            return state
    }
};
 export const reducers =(state = initState, action)  =>{
    switch (action.type) {
        case actiontype.INCREMENT:
            return {
                ...state, ...{count: action.value}
            };
        case actiontype.DECREMENT:
            return {
                count: state.count - 1
            };
        case actiontype.RESET:
            return {count: 0};
        default:
            return state
    }
}
