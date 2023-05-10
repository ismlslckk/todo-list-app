import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store';
import { TodoList } from '@/pages';

test('expect todo list page is rendering with todo types', async () => {
  render(<Provider store={store}><TodoList /></Provider>);

  expect(screen.queryByText('All')).not.toBeNull();
  expect(screen.queryByText('Active')).not.toBeNull();
  expect(screen.queryByText('Completed')).not.toBeNull();
  expect(screen.queryByText('Clear Completed')).not.toBeNull();
});
