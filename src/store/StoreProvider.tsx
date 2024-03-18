'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './store'
import { getUsers } from '@/store/users.slice'

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(getUsers())
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
