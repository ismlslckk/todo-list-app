import { TodoItem } from '@/components';
import { useAppSelector } from '@/store';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);

  const firstTodoItemRadius = { borderTopLeftRadius: '5px', borderTopRightRadius: '5px' };
  const lastTodoItemRadius = { borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' };

  const rowLen = todos.length;

  return (

    <>
      {todos.map((item, i) => {
        if (rowLen === i + 1) {
          return (<TodoItem key={item.id} todo={item} radius={lastTodoItemRadius} />);
        }
        if (i === 0) return (<TodoItem key={item.id} todo={item} radius={firstTodoItemRadius} />);
        return (<TodoItem key={item.id} todo={item} />);
      })}
    </>
  );
};

export default TodoList;
