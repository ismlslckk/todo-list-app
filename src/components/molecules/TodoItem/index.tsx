import { useEffect, useState } from 'react';
import styles from './todoitem.module.scss';
import { Checkbox } from '@/components';
import Input from '@/components/atoms/Input';
import { toggleCompleted } from '@/features/todo/todoSlice';
import { useAppDispatch } from '@/store';

const TodoItem = (props:any) => {
  const [completed, setCompleted] = useState(false);
  const { todo } = { ...props };

  const dispatch = useAppDispatch();

  const handleCompletedChange = (event:any) => {
    setCompleted(event.target.checked);
    dispatch(toggleCompleted(todo));
  };

  useEffect(() => {
    setCompleted(todo.completed);
  }, []);

  return (
    <div className={styles.todoItemDiv}>
      <div className={styles.todoItemCheckboxDiv}>
        <Checkbox
          name="completed"
          value={completed}
          checked={completed}
          id={todo.id}
          onChange={handleCompletedChange}
        />
      </div>
      <div className={styles.todoItemInputDiv}>

        {!completed && (<Input value={todo.title} readOnly className={styles.todoInputText} />)}
        {completed && (
        <span className={styles.todoItemTextDecoration}>
          <Input value={todo.title} readOnly className={styles.todoInputText} />
        </span>
        )}
      </div>
      <div className={styles.todoItemRemove}>
        X
      </div>

    </div>
  );
};

export default TodoItem;
