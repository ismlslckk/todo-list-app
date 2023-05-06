import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store';
import Input from '@/components/atoms/Input';
import { TodoList } from '@/pages';
import { add, remove, toggleCompleted } from '@/features/todo/todoSlice';
import { Todo } from '@/types';

// #region components begin

test('expect input should get className from props', async () => {
  render(<Provider store={store}><Input className="form-control" readOnly value="input-test" /></Provider>);

  expect(screen.getByDisplayValue('input-test').classList.toString().includes('form-control')).toBeTruthy();
});

test('expect todo list page is rendering with todo types', async () => {
  render(<Provider store={store}><TodoList /></Provider>);

  expect(screen.queryByText('All')).not.toBeNull();
  expect(screen.queryByText('Active')).not.toBeNull();
  expect(screen.queryByText('Completed')).not.toBeNull();
  expect(screen.queryByText('Clear Completed')).not.toBeNull();
});

// #endregion components end

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
