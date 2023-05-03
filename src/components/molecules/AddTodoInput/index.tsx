/* import styles from './addtodoinput.scss'; */
import { useState } from 'react';
import Input from '@/components/atoms/Input';
import { add } from '@/features/todo/todoSlice';
import { useAppDispatch } from '@/store';
import { Todo } from '@/types';

const AddTodoInput = () => {
  const [titleInput, setTitleInput] = useState('');
  const dispatch = useAppDispatch();

  const onFormSubmit = (event:any) => {
    event.preventDefault();
    setTitleInput('');
    const todo = { title: titleInput } as Todo;
    dispatch(add(todo));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        name="title"
        value={titleInput}
        onChange={setTitleInput}
      />
    </form>
  );
};

export default AddTodoInput;
