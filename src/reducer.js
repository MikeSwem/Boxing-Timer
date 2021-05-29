import { ActionTypes } from "./Constants";

export const initialState = {
  rounds: 3,
  roundLength: 3,
  restLength: 1,
  endOfRoundCount: 10,
  startCountDown: 3,
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SETTINGS:
      updateSettings(state);
      return state;
    default:
      return state;
  }
};

export const updateSettings = (initialState) => {
  // const { rounds, roundLength, restLength, endOfRoundCount, startCountDown } =
  //   initialState;
};
