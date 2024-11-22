import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/slices/todoSlice';

export default function useTodo(isDone) {
  // TODO: 1. 커스텀훅을 완성해 주세요.
  // TODO: 2. 반환되는 함수들은 memoization 적용해 주세요.

  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // TODO: 비즈니스로직 부분을 커스텀훅으로 변경해 보세요. src/hooks/useTodo.js 준비되어 있습니다.

  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  const toggleTodoItem = (id) => {
    dispatch(toggleTodo(id));
  };

  const deleteTodoItem = (id) => {
    dispatch(deleteTodo(id));
  };
  return { filteredTodos, toggleTodoItem, deleteTodoItem };
}
