import { useState } from 'react';
import { add } from '@/features/todo/todoSlice';
import { useAppDispatch } from '@/store';
import { Todo } from '@/types';
import styles from './addtodoinput.module.scss';
import Input from '@/components/atoms/Input';
import { Checkbox } from '@/components';

const AddTodoInput = () => {
  const [titleInput, setTitleInput] = useState('');
  const dispatch = useAppDispatch();

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    setTitleInput('');
    const todo = { title: titleInput } as Todo;
    dispatch(add(todo));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className={styles.addTodoDiv}>
        <div className={styles.addTodoCheckboxDiv}><Checkbox /></div>
        <div className={styles.addTodoInputDiv}><Input className={styles.addTodoInputText} /></div>
      </div>
    </form>
  );
};

export default AddTodoInput;
