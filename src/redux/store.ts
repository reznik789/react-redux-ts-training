import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./todos/reducer";
import { Todo } from "./todos/interfaces";

export interface StoreState {
  todos: Todo[];
}

const reducer = combineReducers<StoreState>({
  todos: todosReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));
