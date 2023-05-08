import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { TodoItem } from '@/components';
import Button from '@/components/atoms/Button';
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
          <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.ALL })} onClick={() => listAllRecors()} type="button">All</Button>
          <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.ACTIVE })} onClick={() => listActiveRecors()} type="Button">Active</Button>
          <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.COMPLETED })} onClick={() => listCompletedRecors()} type="Button">Completed</Button>
          <Button onClick={() => clearCompletedHandle()} type="button" className={styles.clickable}>Clear Completed</Button>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TodoList;
