import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

const initialState = {};

const middleware = [thunk];

const userListReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER":
      return action.payload;
    default:
      return state;
  }
};

export const userAction = () => async (dispatch) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  dispatch({
    type: "USER",
    payload: data,
  });
};

const reducer = combineReducers({
  userList: userListReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
