import { connect } from 'react-redux'

import ProductsIndex from '../components/products_index'
import { fetchProductVariants } from '../../../actions/product_variants'

const mapStateToProps = state => {
  if (state.productVariants && state.productVariants.results) {
    return {
      page: state.productVariants.page,
      per: state.productVariants.per,
      isLoading: state.productVariants.isFetching,
      results: state.productVariants.results.product_variants
    }
  } else {
    return {
      page: 1,
      per: 30,
      isLoading: true,
      results: []
    }
  }
}

const mapDispatchToProps = dispatch => ({
  handleChange(date) {
    this.setState({
      startDate: date
    })
  },

  initialSearch() {
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
    const conditions = {
      id: {
        column: { value: 'asc' },
        filter: { value: '' }
      },
      product_id: {
        filter: { value: '' }
      },
      sku: {
        filter: { value: ''}
      },
      product_name: {
        filter: { value: ''}
      },
      variant_name: {
        filter: { value: ''}
      },
      price: {
        filter: { value: ''}
      },
      available_on: {
        filter: { value: ''}
      },
      created_at: {
        filter: { value: ''}
      },
      updated_at: {
        filter: { value: ''}
      },
    }
    this.refs.searchTable.applySearchConditions(conditions)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex)