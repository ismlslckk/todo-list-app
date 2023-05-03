import { useEffect, useState } from 'react';
import styles from './todoitem.module.scss';
import { Checkbox } from '@/components';
import Input from '@/components/atoms/Input';

const TodoItem = (props:any) => {
  const [completed, setCompleted] = useState(false);
  const { todo, radius } = { ...props };

  const handleCompletedChange = (event:any) => {
    // eslint-disable-next-line no-console
    console.log(event);
    setCompleted(event);
  };

  useEffect(() => {
    setCompleted(todo.completed);
  }, []);

  return (
    <div className={styles.todoItemDiv} style={radius}>
      <div className={styles.todoItemCheckboxDiv}>
        <Checkbox
          name="completed"
          value={completed}
          id={todo.id}
          onChange={handleCompletedChange}
        />
      </div>
      <div className={styles.todoItemInputDiv}>

        {!completed && (<Input value={todo.title} className={styles.todoInputText} />)}
        {completed && (
        <span className={styles.todoItemTextDecoration}>
          <Input value={todo.title} className={styles.todoInputText} />
        </span>
        )}
      </div>

    </div>
  );
};

export default TodoItem;
