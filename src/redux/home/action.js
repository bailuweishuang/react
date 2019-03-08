import * as home from "./action-type";

export const increment = value => {
  return {
    type: home.INCREMENT,
    value
  };
};

export const decrement = () => {
  return { type: home.DECREMENT };
};

export const reset = () => {
  return { type: home.RESET };
};
//异步
// export const getId = () => {
//   return async dispatch => {
//     try {
//       let rest = await Api.get();
//       res.map(i => i);
//       dispatch({
//         type: home.INCREMENT,
//         ...rest
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
