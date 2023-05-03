import { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { add } from '@/features/todo/todoSlice';
import { Todo } from '@/types';

const Header = () => {
  const [titleInput, setTitleInput] = useState('');

  /*   const todos = useAppSelector((state) => state.todos); */
  const dispatch = useAppDispatch();

  const onFormSubmit = (event:any) => {
    event.preventDefault();
    setTitleInput('');
    const todo = { title: titleInput } as Todo;
    dispatch(add(todo));
  };

  return (

    <form onSubmit={onFormSubmit}>
      <input
        name="title"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
    </form>

  );
};

export default Header;
