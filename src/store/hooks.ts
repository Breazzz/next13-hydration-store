import {
  useDispatch as UseAppDispatch,
  useSelector as UseAppSelector,
  useStore as UseAppStore,
} from 'react-redux'
import { AppDispatch, RootState, AppStore } from './store'

export const useDispatch = UseAppDispatch.withTypes<AppDispatch>()
export const useSelector = UseAppSelector.withTypes<RootState>()
export const useStore = UseAppStore.withTypes<AppStore>()
