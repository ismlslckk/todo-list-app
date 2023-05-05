import { useEffect, useState } from 'react';
import styles from './todoitem.module.scss';
import { Checkbox } from '@/components';
import Input from '@/components/atoms/Input';
import { remove, toggleCompleted } from '@/features/todo/todoSlice';
import { useAppDispatch } from '@/store';
import { Todo } from '@/types';
import { useHover } from '@/hooks';

const TodoItem = (props:any) => {
  const [completed, setCompleted] = useState(false);
  const { todo = {} as Todo } = { ...props };

  const [hoverRef, isHovering] = useHover();

  const dispatch = useAppDispatch();

  const handleCompletedChange = (event:any) => {
    setCompleted(event.target.checked);
    dispatch(toggleCompleted(todo));
  };

  const handleRemoveItemClick = () => {
    dispatch(remove(todo));
  };

  useEffect(() => {
    setCompleted(todo.completed);
  }, []);

  return (
    <div className={styles.todoItemDiv}>
      <div className={styles.todoItemCheckboxDiv}>
        <Checkbox
          ref={hoverRef}
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
        {((isHovering)
        && (<button className={styles.removeButton} type="button" onClick={() => handleRemoveItemClick()}>X</button>))}

      </div>

    </div>
  );
};

export default TodoItem;

// className={styles['todo-item-remove']}
