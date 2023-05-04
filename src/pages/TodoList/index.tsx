import { useEffect, useState } from 'react';
import { TodoItem } from '@/components';
import { InnerWrapper, Wrapper } from '@/components/atoms';
import { useAppSelector } from '@/store';
import { Todo } from '@/types';
import styles from './todolist.module.scss';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const [leftItemCount, setLeftItemCount] = useState(0);

  useEffect(() => {
    setLeftItemCount(todos.filter((todo:Todo) => !todo.completed).length);
  }, [todos]);

  return (
    <Wrapper>
      <InnerWrapper>
        <div className={styles.todoListBody}>
          <div>
            {todos.map((item) => (<TodoItem key={item.id} todo={item} />))}
          </div>
        </div>
        <div className={styles.footer}>
          <span className={styles.leftItemCount}>{`${leftItemCount} items left`}</span>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
          <span>Clear Completed</span>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TodoList;
