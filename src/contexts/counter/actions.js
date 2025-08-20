import { ACTIONS } from "./constants";

export const incrementAction = () => ({ type: ACTIONS.INCREMENT });
export const decrementAction = () => ({ type: ACTIONS.DECREMENT });
export const resetAction = () => ({ type: ACTIONS.RESET });
export const addNumAction = a => ({ type: ACTIONS.ADDNUM, payload: a });
export const actions = {
  incrementAction,
  decrementAction,
  resetAction,
  addNumAction,
};
