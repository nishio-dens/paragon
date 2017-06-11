import { createStore } from 'redux'
import appReducer from '../reducers';

export function configureStore() {
  return createStore(appReducer)
}

const AppStore = configureStore()
export default AppStore
