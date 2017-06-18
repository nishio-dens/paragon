import qs from 'qs'
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

export function fetchProductVariants(page = 1, per = 30, searchConditions = {}) {
  return (dispatch, getState) => {
    let filter = searchConditions["filter"] || {}
    let order = searchConditions["order"] || {}

    let params = qs.stringify({
      page: page,
      per: per,
      q: {
        id_eq: filter["id"],
        product_id_eq: filter["product_id"],
        sku_eq: filter["sku"],
        product_name_cont: filter["product_name"],
        name_cont: filter["name"],
        // TODO
      },
      s: {
        id: "desc", // TODO
      }
    })
    dispatch(fetchProductVariantsRequest())
    api(getState)
      .get(`/api/product_variants?${params}`)
      .then(response => dispatch(fetchProductVariantsSuccess(response.data)))
      .catch(error => dispatch(fetchProductVariantsFail(error)))
  }
}
