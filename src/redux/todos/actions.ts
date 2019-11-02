import axios from "axios";
import { Dispatch } from "redux";
import { Todo, FetchTodosAction, DeleteTodoAction } from "./interfaces";
import { todosActionTypes } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodosAction = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Todo[]>(url);
  dispatch<FetchTodosAction>({
    type: todosActionTypes.FETCH_TODOS,
    payload: response.data
  });
};

export const deleteTodoAction = (id: number): DeleteTodoAction => ({
  type: todosActionTypes.DELETE_TODOS,
  payload: id
});
