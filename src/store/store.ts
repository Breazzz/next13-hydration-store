import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '@/store/counter.slice'
import usersReducer from '@/store/users.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
