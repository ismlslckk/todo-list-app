import { render } from '@testing-library/react';
import Input from '@/components/atoms/Input';

describe('input component tests', () => {
  test('expect input should get className from props', async () => {
    const input:any = render(<Input className="form-control" />);

    expect(input.container.firstChild.classList.contains('form-control')).toBe(true);
  });

  test('expect input should be readOnly', async () => {
    const input:any = render(<Input className="form-control" readOnly />);

    expect(input.container.firstChild).toHaveProperty('readOnly');
  });

  test('expect input should be disable', async () => {
    const input:any = render(<Input className="form-control" disabled />);

    expect(input.container.firstChild).toHaveProperty('disabled');
  });
});
