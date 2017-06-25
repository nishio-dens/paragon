import { combineReducers } from 'redux'

import adminNavbar from './admin_navbar'
import showHideColumns from './show_hide_columns'
import productVariants from './product_variants'

export default combineReducers({
  adminNavbar,
  showHideColumns,
  productVariants
})