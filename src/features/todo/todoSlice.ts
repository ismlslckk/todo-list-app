import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import {
  Todo, TodoState, TodoType,
} from '@/types';

const initialState: TodoState = { todos: [], selectedTodoType: TodoType.ALL };

const setLocalStorage = (list:Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(list));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      const newTodo = ({ id: v4(), completed: action.payload.completed, title: action.payload.title }) as Todo;
      state.todos.push(newTodo);
      setLocalStorage(state.todos);
    },
    remove: (state, action:PayloadAction<Todo>) => {
      state.todos.filter((todo:Todo) => todo.id !== action.payload.id);
    },
    toggleCompleted: (state, action: PayloadAction<Todo>) => {
      const findedItem = state.todos.find((item:Todo) => item.id === action.payload.id);
      if (findedItem) {
        findedItem.completed = !findedItem.completed;
      }
    },
    setSelectedTodoType: (state, action:PayloadAction<TodoType>) => ({ ...state, selectedTodoType: action.payload }),
  },
});

export default todoSlice.reducer;
export const {
  add, remove, toggleCompleted, setSelectedTodoType,
} = todoSlice.actions;
