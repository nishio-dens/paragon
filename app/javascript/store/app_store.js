import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers';

export function configureStore() {
  /* eslint-disable no-underscore-dangle */
  return createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
  /* eslint-enable */
}

const AppStore = configureStore()
export default AppStore
