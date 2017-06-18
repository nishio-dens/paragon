import {
  ADMIN_NAVBAR_LOADING,
  ADMIN_NAVBAR_NOT_LOADING
} from '../actions/admin_navbar'

const initialState = {
  nowLoading: false
}

export default function adminNavbar(state = initialState, action) {
  switch (action.type) {
    case ADMIN_NAVBAR_LOADING:
      return Object.assign({}, state, { nowLoading: true })
    case ADMIN_NAVBAR_NOT_LOADING:
      return Object.assign({}, state, { nowLoading: false })
    default:
      return state
  }
}