import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { Todo } from '@/types';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      const newTodo = ({ id: v4(), completed: false, title: action.payload.title }) as Todo;
      state.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state));
    },
  },
});

export default todoSlice.reducer;
export const { add } = todoSlice.actions;
