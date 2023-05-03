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
      // eslint-disable-next-line max-len
      const newTodo = ({ id: v4(), completed: action.payload.completed, title: action.payload.title }) as Todo;
      state.push(newTodo);
      setLocalStorage(state);
    },
    // eslint-disable-next-line max-len
    toggleCompleted: (state, action: PayloadAction<Todo>) => state.map((item) => (item.id === action.payload.id ? { ...item, completed: !item.completed } : item)),
  },
});

export default todoSlice.reducer;
export const { add, toggleCompleted } = todoSlice.actions;
