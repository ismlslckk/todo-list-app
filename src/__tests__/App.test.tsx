import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store';
import { TodoList } from '@/pages';

test('expect todo list opened', async () => {
  render(<Provider store={store}><TodoList /></Provider>);

  expect(screen.queryByText('Clear Completed')).not.toBeNull();
});
