import React, { useCallback, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchTodosAction, deleteTodoAction } from "../redux/todos/actions";
import { Todo } from "../redux/todos/interfaces";
import { StoreState } from "../redux/store";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodoAction;
}

const _App: React.FunctionComponent<AppProps> = (props): JSX.Element => {
  const { todos, fetchTodos, deleteTodo } = props;
  const [fetching, setFetching] = useState<boolean>(false); // Fetching state should be managed with redux state, i just made it to try locat state with types in action
  const prevTodosRef = useRef<Todo[]>(props.todos);

  const handleFetchClick: () => void = useCallback(() => {
    fetchTodos();
    setFetching(true);
  }, [fetchTodos]);

  useEffect(() => {
    const prevTodos = prevTodosRef.current;
    prevTodosRef.current = todos;
    if (!prevTodos.length && !!todos.length) {
      setFetching(false);
    }
  }, [todos]);

  const handleTitleClick: (id: number) => void = useCallback(
    (id: number) => {
      deleteTodo(id);
    },
    [deleteTodo]
  );

  const renderList = useCallback<() => JSX.Element[]>((): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      const clickHandler = () => handleTitleClick(todo.id);

      return (
        <div onClick={clickHandler} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }, [todos, handleTitleClick]);

  return (
    <div>
      <button onClick={handleFetchClick}>Fetch</button>
      {fetching ? "Loading..." : renderList()}
    </div>
  );
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => ({
  todos: state.todos
});

const mapDispatchToProps = {
  fetchTodos: fetchTodosAction,
  deleteTodo: deleteTodoAction
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
