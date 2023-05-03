import { TodoItem } from '@/components';
import { useAppSelector } from '@/store';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);

  return (
    <>
      {todos.map((item) => (<TodoItem key={item.id} todo={item} />))}
    </>
  );
};

export default TodoList;
