import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store';
import Input from '@/components/atoms/Input';
import { TodoList } from '@/pages';

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
