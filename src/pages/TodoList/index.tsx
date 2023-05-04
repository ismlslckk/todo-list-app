import { useEffect, useState } from 'react';
import { TodoItem } from '@/components';
import { InnerWrapper, Wrapper } from '@/components/atoms';
import { useAppDispatch, useAppSelector } from '@/store';
import { Todo } from '@/types';
import styles from './todolist.module.scss';
import { setActivePage } from '@/features/globalSlice';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const globalState = useAppSelector((state) => state.globalState);

  const dispatch = useAppDispatch();

  const [leftItemCount, setLeftItemCount] = useState(0);

  const [listedRecords, setListedRecords] = useState<Todo[]>([]);

  const calculateLeftItemCount = () => {
    setLeftItemCount(listedRecords.filter((todo:Todo) => !todo.completed).length);
  };

  const listAllRecors = () => {
    dispatch(setActivePage(listAllRecors.name));
    setListedRecords([...todos]);
  };

  const listActiveRecors = () => {
    dispatch(setActivePage(listActiveRecors.name));
    const records = [...todos.filter((item:Todo) => item.completed === false)];
    setListedRecords(records);
  };

  const listCompletedRecors = () => {
    dispatch(setActivePage(listCompletedRecors.name));
    const records = [...todos.filter((item:Todo) => item.completed === true)];
    setListedRecords(records);
  };

  const actions = {
    listAllRecors,
    listActiveRecors,
    listCompletedRecors,
  } as any;

  useEffect(() => {
    dispatch(setActivePage(listAllRecors.name));
  }, []);

  useEffect(() => {
    calculateLeftItemCount();
  }, [listedRecords]);

  useEffect(() => {
    if (globalState.selectedTodoAction) {
      actions[globalState.selectedTodoAction]();
    }
  }, [globalState.selectedTodoAction, todos]);

  return (
    <Wrapper>
      <InnerWrapper>
        <div className={styles.todoListBody}>
          <div>
            {listedRecords.map((item) => (<TodoItem key={item.id} todo={item} />))}
          </div>
        </div>
        <div className={styles.footer}>
          <span className={styles.leftItemCount}>{`${leftItemCount} items left`}</span>
          <button onClick={() => listAllRecors()} type="button" className={styles.clickable}>All</button>
          <button onClick={() => listActiveRecors()} type="button" className={styles.clickable}>Active</button>
          <button onClick={() => listCompletedRecors()} type="button" className={styles.clickable}>Completed</button>
          <button type="button" className={styles.clickable}>Clear Completed</button>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TodoList;
