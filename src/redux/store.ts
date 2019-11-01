import { combineReducers } from "redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from "./todos/reducer";

const reducer = combineReducers({
  todos: todosReducer
});

export default createStore(reducer, applyMiddleware(thunk));