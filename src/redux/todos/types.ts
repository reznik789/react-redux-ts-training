import { FetchTodosAction, DeleteTodoAction } from "./interfaces";

export enum todosActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  DELETE_TODOS = "DELETE_TODOS"
}

export type TodoAction = FetchTodosAction | DeleteTodoAction;
