import store from '@/store';
import { add, remove, toggleCompleted } from '@/features/todo/todoSlice';
import { Todo } from '@/types';

// #region Reducers begin

test('store => todoSlice actions should work as correctly', () => {
  // step1 : add 2 new items
  store.dispatch(add({ completed: false, title: 'test1' } as Todo));
  store.dispatch(add({ completed: false, title: 'test2' } as Todo));

  let { todos } = store.getState().todoState;

  // step2 : remove first item
  store.dispatch(remove(todos[0]));

  // step3 : set second item completed status as true
  store.dispatch(toggleCompleted(todos[1]));

  todos = store.getState().todoState.todos;

  const secondTodoItem = todos.find((todo:Todo) => todo.title === 'test2') || {} as Todo;

  expect(todos.length).toEqual(1);
  expect(secondTodoItem.title).toEqual('test2');
  expect(secondTodoItem.completed).toEqual(true);
});

// #endregion Reducers end
