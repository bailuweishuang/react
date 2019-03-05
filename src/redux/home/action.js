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
