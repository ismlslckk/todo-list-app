import { useState } from 'react';
import { add } from '@/features/todo/todoSlice';
import { useAppDispatch } from '@/store';
import { Todo } from '@/types';
import styles from './addtodoinput.module.scss';
import Input from '@/components/atoms/Input';
import { Checkbox } from '@/components';

const AddTodoInput = () => {
  const [titleInput, setTitleInput] = useState('');
  const [completed, setCompleted] = useState(false);

  const dispatch = useAppDispatch();

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    setTitleInput('');
    const todo = { title: titleInput, completed: completed } as Todo;
    dispatch(add(todo));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className={styles.addTodoDiv}>
        <div className={styles.addTodoCheckboxDiv}>
          <Checkbox
            name="completed"
            value={completed}
            onChange={setCompleted}
          />
        </div>
        <div className={styles.addTodoInputDiv}>
          <Input
            name="title"
            value={titleInput}
            onChange={setTitleInput}
            className={styles.addTodoInputText}
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodoInput;
