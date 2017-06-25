export const SHOW_HIDE_COLUMNS_UPDATE = 'SHOW_HIDE_COLUMNS_UPDATE'
export const SHOW_HIDE_COLUMNS_PARTIAL_UPDATE = 'SHOW_HIDE_COLUMNS_PARTIAL_UPDATE'

export function updateShowHideColumns(tableName, columns) {
  return {
    type: SHOW_HIDE_COLUMNS_UPDATE,
    tableName,
    columns
  }
}

export function updatePartialShowHideColumns(tableName, id, value) {
  return {
    type: SHOW_HIDE_COLUMNS_PARTIAL_UPDATE,
    tableName,
    id,
    value
  }
}