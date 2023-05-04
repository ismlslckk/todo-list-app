import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { Todo } from '@/types';

const initialState: Todo[] = [];

const setLocalStorage = (list:Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(list));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      const newTodo = ({ id: v4(), completed: action.payload.completed, title: action.payload.title }) as Todo;
      state.push(newTodo);
      setLocalStorage(state);
    },
    remove: (state, action:PayloadAction<Todo>) => state.filter((todo:Todo) => todo.id !== action.payload.id),
    toggleCompleted: (state, action: PayloadAction<Todo>) => state.map((item) => (item.id === action.payload.id ? { ...item, completed: !item.completed } : item)),
  },
});

export default todoSlice.reducer;
export const { add, remove, toggleCompleted } = todoSlice.actions;
