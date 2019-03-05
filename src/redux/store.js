import { createStore, combineReducers, applyMiddleware } from "redux";
import * as home from "./home/reducer";
//import * as production from './production/reducer';
import thunk from "redux-thunk";
// import { saveFormData, saveImg, clearData } from "./home/action";

let store = createStore(combineReducers({...home}),applyMiddleware(thunk));


// // 每次 state 更新时，打印日志
// // 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );
// (state = {}, action) => {
//   return {
//     counter: home(state.counter, action)
//   };
// }, 
// // 发起一系列 action
// store.dispatch(saveFormData());
// store.dispatch(saveImg());
// store.dispatch(clearData());

// // 停止监听 state 更新
// unsubscribe();
export default store;
