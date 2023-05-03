import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { Todo } from '@/types';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      // eslint-disable-next-line max-len
      const newTodo = ({ id: v4(), completed: action.payload.completed, title: action.payload.title }) as Todo;
      state.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state));
    },
  },
});

export default todoSlice.reducer;
export const { add } = todoSlice.actions;
