import { ActionTypes } from "./Constants";

const initialState = {
  rounds: 3,
  roundLength: 3,
  restLength: 1,
  endOfRoundCount: 10,
  startCountDown: 3,
};

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_ROUND:
      return state;
    case ActionTypes.UPDATE_ROUND_LENGTH:
      return state;
    case ActionTypes.UPDATE_REST_LENGTH:
      return state;
    case ActionTypes.UPDATE_END_OF_ROUND_COUNT:
      return state;
    case ActionTypes.UPDATE_START_ROUND_COUNT:
      return state;
    default:
      return state;
  }
};
