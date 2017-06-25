import {
  SHOW_HIDE_COLUMNS_PARTIAL_UPDATE,
  SHOW_HIDE_COLUMNS_UPDATE
} from '../actions/show_hide_columns'

const initialState = {}

export default function showHideColumns(state = initialState, action) {
  let res = {}
  switch (action.type) {
    case SHOW_HIDE_COLUMNS_UPDATE:
      res[action.tableName] = action.columns

      return Object.assign({}, state, res)
    case SHOW_HIDE_COLUMNS_PARTIAL_UPDATE:
      res[action.tableName] = state[action.tableName] || {}
      res[action.tableName][action.id] = Object.assign(
        {},
        res.productIndex[action.id],
        {checked: action.value}
      )

      return Object.assign({}, state, res)
    default:
      return state
  }
}