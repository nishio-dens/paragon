import api from '../lib/api'

export const PRODUCT_VARIANTS_FETCH_REQUEST = 'PRODUCT_VARIANT_FETCH_REQUEST'
export const PRODUCT_VARIANTS_FETCH_SUCCESS = 'PRODUCT_VARIANT_FETCH_SUCCESS'
export const PRODUCT_VARIANTS_FETCH_FAIL  = 'PRODUCT_VARIANT_FETCH_FAIL'

export function fetchProductVariantsRequest() {
  return {
    type: PRODUCT_VARIANTS_FETCH_REQUEST
  }
}

export function fetchProductVariantsSuccess(results) {
  return {
    type: PRODUCT_VARIANTS_FETCH_SUCCESS,
    results
  }
}

export function fetchProductVariantsFail(error) {
  return {
    type: PRODUCT_VARIANTS_FETCH_FAIL,
    error
  }
}

export function fetchProductVariants() {
  return (dispatch, getState) => {
    dispatch(fetchProductVariantsRequest())

    api(getState)
      .get("/api/product_variants")
      .then(response => dispatch(fetchProductVariantsSuccess(response.data)))
      .catch(error => dispatch(fetchProductVariantsFail(error)))
  }
}
