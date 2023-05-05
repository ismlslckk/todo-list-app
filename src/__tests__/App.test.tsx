import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store';
import Input from '@/components/atoms/Input';

test('expect input should get className from props', async () => {
  render(<Provider store={store}><Input className="form-control" readOnly value="input-test" /></Provider>);

  expect(screen.getByDisplayValue('input-test').classList.toString().includes('form-control')).toBeTruthy();
});
