import { useEffect, useState } from 'react';
import { TodoItem } from '@/components';
import { InnerWrapper, Wrapper } from '@/components/atoms';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  Todo, TodoType,
} from '@/types';
import styles from './todolist.module.scss';
import { clearCompleted, setSelectedTodoType } from '@/features/todo/todoSlice';

const TodoList = () => {
  const todoState = useAppSelector((state) => state.todoState);
  const { todos, selectedTodoType } = todoState;

  const dispatch = useAppDispatch();

  const [leftItemCount, setLeftItemCount] = useState(0);

  const [listedRecords, setListedRecords] = useState<Todo[]>([]);

  const calculateLeftItemCount = () => {
    setLeftItemCount(listedRecords.filter((todo:Todo) => !todo.completed).length);
  };

  const listAllRecors = () => {
    dispatch(setSelectedTodoType(TodoType.ALL));
    setListedRecords([...todos]);
  };

  const listActiveRecors = () => {
    dispatch(setSelectedTodoType(TodoType.ACTIVE));
    const records = [...todos.filter((item:Todo) => item.completed === false)];
    setListedRecords(records);
  };

  const listCompletedRecors = () => {
    dispatch(setSelectedTodoType(TodoType.COMPLETED));
    const records = [...todos.filter((item:Todo) => item.completed === true)];
    setListedRecords(records);
  };

  const clearCompletedHandle = () => {
    dispatch(clearCompleted());
    dispatch(setSelectedTodoType(TodoType.ACTIVE));
  };

  const actions:any = {
    [`${TodoType.ALL}`]: listAllRecors,
    [`${TodoType.ACTIVE}`]: listActiveRecors,
    [`${TodoType.COMPLETED}`]: listCompletedRecors,
  };

  useEffect(() => {
    dispatch(setSelectedTodoType(TodoType.ALL));
  }, []);

  useEffect(() => {
    calculateLeftItemCount();
  }, [listedRecords]);

  useEffect(() => {
    if (selectedTodoType) {
      actions[selectedTodoType]();
    }
  }, [selectedTodoType, todos]);

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
          <button onClick={() => clearCompletedHandle()} type="button" className={styles.clickable}>Clear Completed</button>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TodoList;
