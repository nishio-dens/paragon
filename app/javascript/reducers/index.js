import { combineReducers } from 'redux'

import adminNavbar from './admin_navbar'
import productVariants from './product_variants'

export default combineReducers({
  adminNavbar,
  productVariants
})