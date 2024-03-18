import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'

type TUser = {
  id: string
  name: string
}

interface IUsers {
  users: TUser[]
  loading: boolean
}

export const getUsers = createAsyncThunk(
  'users',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      return response.json()
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

const initialState = {
  users: [],
  loading: true,
} satisfies IUsers as IUsers

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state: any, action) => {
      state.users.push(...action.payload)
      state.loading = false
    })
  },
})

export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer
