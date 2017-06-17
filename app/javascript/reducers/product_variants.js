import {
  PRODUCT_VARIANTS_FETCH_REQUEST,
  PRODUCT_VARIANTS_FETCH_SUCCESS,
  PRODUCT_VARIANTS_FETCH_FAIL
} from '../actions/product_variants'

const initialState = {}

export default function productVariants(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_VARIANTS_FETCH_REQUEST:
      return Object.assign({}, state, { isFetching: true })
    case PRODUCT_VARIANTS_FETCH_SUCCESS:
      return Object.assign({}, state, action, { isFetching: false })
    case PRODUCT_VARIANTS_FETCH_FAIL:
      return Object.assign({}, state, { isFetching: false })
    default:
      return state
  }
}