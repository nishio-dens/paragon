import qs from 'qs'
import api from '../lib/api'

import { startLoading, stopLoading } from './admin_navbar'

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
    let q = {}
    let s = {}
    Object.keys(filter).forEach(key => {
      let val = filter[key]
      if (val) {
        switch(key) {
          case "id":
            q["id_eq"] = val
            break
          case "product_id":
            q["product_id_eq"] = val
            break
          case "sku":
            q["sku_eq"] = val
            break
          case "product_name":
            q["product_name_eq"] = val
            break
          case "name":
            q["name_eq"] = val
            break
        }
      }
    })
    Object.keys(order).forEach(key => {
      let val = order[key]
      if (val) {
        s[key] = val
      }
    })
    let params = qs.stringify({ page: page, per: per, q: q, s: s})
    dispatch(fetchProductVariantsRequest())
    dispatch(startLoading())
    api(getState)
      .get(`/api/product_variants?${params}`)
      .then(response => {
        dispatch(fetchProductVariantsSuccess(response.data))
        dispatch(stopLoading())
      })
      .catch(error => {
        dispatch(fetchProductVariantsFail(error))
        dispatch(stopLoading())
      })
  }
}
