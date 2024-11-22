import TodoItem from './TodoItem';
import useTodo from '../hooks/useTodo';

export default function TodoList({ isDone }) {
  const { filteredTodos, toggleTodoItem, deleteTodoItem } = useTodo(isDone);
  // TODO: 비즈니스로직 부분을 커스텀훅으로 변경해 보세요. src/hooks/useTodo.js 준비되어 있습니다.

  return (
    <>
      <h2>{isDone ? 'Done' : 'Wokring...'}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoItem={toggleTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    </>
  );
}
//  튜터님 다했습니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  튜터님 다했습니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  튜터님 다했습니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  튜터님 다했습니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  튜터님 다했습니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
