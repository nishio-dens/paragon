import { connect } from 'react-redux'

import ProductsIndex from '../components/products_index'
import { fetchProductVariants } from '../../../actions/product_variants'
import {updatePartialShowHideColumns, updateShowHideColumns} from '../../../actions/show_hide_columns'

const mapStateToProps = state => {
  let res = {
    page: 1,
    per: 30,
    isLoading: true,
    results: [],
    columns: {},
    showColumns: []
  }
  if (state.productVariants) {
    let results = state.productVariants.results && state.productVariants.results.product_variants || []
    res = Object.assign({}, res, {
      page: state.productVariants.page,
      per: state.productVariants.per,
      isLoading: state.productVariants.isFetching,
      results: results,
    })
  }
  if (state.showHideColumns && state.showHideColumns.productIndex) {
    res.columns = state.showHideColumns.productIndex
    res.showColumns = Object
      .keys(state.showHideColumns.productIndex)
      .filter(k => state.showHideColumns.productIndex[k].checked)
  }
  return res
}

const mapDispatchToProps = dispatch => ({
  handleChange(date) {
    this.setState({
      startDate: date
    })
  },

  initialize() {
    dispatch(updateShowHideColumns("productIndex", this.props.defaultShowColumns()))
    this.refs.searchTable.initialSearch()
  },

  handleSearch(changedValues) {
    let filterConditions = {}
    let sortConditions = {}
    Object.keys(changedValues).forEach(k => {
      const val = changedValues[k]
      if (val.filter && val.filter.attrName) {
        filterConditions[val.filter.attrName] = val.filter.value
      }
      if (val.column && val.column.attrName) {
        sortConditions[val.column.attrName] = val.column.value
      }
    })
    dispatch(fetchProductVariants(this.props.page, this.props.per, {
      filter: filterConditions,
      order: sortConditions
    }))
  },

  resetSearchCondition() {
    const conditions = this.props.defaultSearchConditions()
    this.refs.searchTable.applySearchConditions(conditions)
  },

  onChangeShowHideColumns(id, checked) {
    dispatch(updatePartialShowHideColumns("productIndex", id, checked))
  },

  defaultSearchConditions() {
    return {
      id: { column: {value: 'asc'}, filter: {value: ''} },
      product_id: { filter: {value: ''} }, sku: { filter: {value: ''} },
      product_name: { filter: {value: ''} }, name: { filter: {value: ''} },
      price: { filter: {value: ''} },
      available_on: { filter: {value: ''} },
      created_at: { filter: {value: ''} },
      updated_at: { filter: {value: ''} }
    }
  },

  defaultShowColumns() {
    return {
      id: { displayName: "ID", checked: true },
      product_id: { displayName: "Product ID", checked: true },
      sku: { displayName: "SKU", checked: true },
      product_name: { displayName: "Product Name", checked: true },
      name: { displayName: "Variant Name", checked: true },
      price: { displayName: "Price", checked: true },
      available_on: { displayName: "Available On", checked: true },
      created_at: { displayName: "Created At", checked: true },
      updated_at: { displayName: "Updated At", checked: true },
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex)