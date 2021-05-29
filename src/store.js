import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { MainReducer, initialState } from "./reducer";

// export const store = createStore(MainReducer, [initialState]);
export default function configureStore(initialState) {
  return createStore(
    MainReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
}

export const store = configureStore(initialState);

console.log("store", store.getState());
