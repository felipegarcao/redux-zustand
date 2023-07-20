import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';



const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Ir ao medico'],
  reducers: {
    add: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      state.push(action.payload.newTodo)
    }
  }
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})

export const {add} = todoSlice.actions

export type RootState =  ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector