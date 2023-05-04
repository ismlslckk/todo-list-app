import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GlobalState } from '@/types';

const initialState: GlobalState = { selectedTodoAction: '' } as GlobalState;

const globalStateSlice = createSlice({
  name: 'globalStates',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<string>) => ({ ...state, selectedTodoAction: action.payload }),
  },
});

export default globalStateSlice.reducer;
export const { setActivePage } = globalStateSlice.actions;
