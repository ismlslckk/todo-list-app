import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  Todo, TodoType,
} from '@/types';
import { clearCompleted, setSelectedTodoType, updateTodoList } from '@/features/todo/todoSlice';
import styles from './todolist.module.scss';
import { TodoItem } from '@/components/molecules';
import { Button } from '@/components/atoms';

const TodoList = () => {
  const todoState = useAppSelector((state) => state.todoState);
  const { todos, selectedTodoType } = todoState;

  const dispatch = useAppDispatch();

  const [leftItemCount, setLeftItemCount] = useState(0);

  const [listedRecords, setListedRecords] = useState<Todo[]>([]);

  const calculateLeftItemCount = () => {
    setLeftItemCount(listedRecords.filter((todo:Todo) => !todo.completed).length);
  };

  /**
   *
   */
  const listAllRecors = () => {
    dispatch(setSelectedTodoType(TodoType.ALL));
    setListedRecords([...todos]);
  };

  /**
   *
   */
  const listActiveRecors = () => {
    dispatch(setSelectedTodoType(TodoType.ACTIVE));
    const records = [...todos.filter((item:Todo) => item.completed === false)];
    setListedRecords(records);
  };

  /**
   *
   */
  const listCompletedRecors = () => {
    dispatch(setSelectedTodoType(TodoType.COMPLETED));
    const records = [...todos.filter((item:Todo) => item.completed === true)];
    setListedRecords(records);
  };

  /**
   *
   */
  const clearCompletedHandle = () => {
    dispatch(clearCompleted());
    dispatch(setSelectedTodoType(TodoType.ACTIVE));
  };

  const actions:any = {
    [`${TodoType.ALL}`]: listAllRecors,
    [`${TodoType.ACTIVE}`]: listActiveRecors,
    [`${TodoType.COMPLETED}`]: listCompletedRecors,
  };

  /**
   *
   */
  useEffect(() => {
    dispatch(setSelectedTodoType(TodoType.ALL));
  }, []);

  /**
   *
   */
  useEffect(() => {
    calculateLeftItemCount();
  }, [listedRecords]);

  /**
   *
   */
  useEffect(() => {
    if (selectedTodoType) {
      actions[selectedTodoType]();
    }
  }, [selectedTodoType, todos]);

  /**
   *
   * @param list
   * @param startIndex
   * @param endIndex
   * @returns
   */
  const reorder = (list:any, startIndex:any, endIndex:any) => {
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result:any) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const items = reorder(listedRecords, source.index, destination.index);
    let newState:any = [...listedRecords];
    newState = items;
    dispatch(updateTodoList(newState));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable key="draggable-todo-list" droppableId="draggable-todo-list">
        {(provided:any) => (
          <div>
            <div
              className={styles.todoListBody}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {listedRecords.map((item:any, index:any) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(providedInner:any) => (
                    <div
                      ref={providedInner.innerRef}
                      {...providedInner.draggableProps}
                      {...providedInner.dragHandleProps}
                    >
                      <TodoItem key={item.id} todo={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
            <div className={styles.footer}>
              <span className={styles.leftItemCount}>{`${leftItemCount} items left`}</span>
              <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.ALL })} onClick={() => listAllRecors()} type="button">All</Button>
              <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.ACTIVE })} onClick={() => listActiveRecors()} type="Button">Active</Button>
              <Button className={classNames(styles.clickable, { [`${styles.selectedItem}`]: selectedTodoType === TodoType.COMPLETED })} onClick={() => listCompletedRecors()} type="Button">Completed</Button>
              <Button onClick={() => clearCompletedHandle()} type="button" className={styles.clickable}>Clear Completed</Button>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
