import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { debounce } from 'lodash'

import ProductRow from './product_row'
import {
  SearchTable,
  SearchTableHeader,
  SearchHeaderColumn,
  SearchTableBody
} from '../../../lib/search_tables'

export default class ProductsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.props.handleChange.bind(this)
    this.initialSearch = this.props.initialSearch.bind(this)
    this.handleSearch = this.props.handleSearch.bind(this)
    this.debounceHandleSearch = debounce(this.handleSearch, 300)
    this.resetSearchCondition = this.props.resetSearchCondition.bind(this)
  }

  componentDidMount() {
    this.initialSearch()
  }

  render() {
    const { page, per, results } = this.props
    const rowComponents = results.map(r => (<ProductRow key={r.id} {...r} />))

    return (
      <div>
        <div className="row mb-5">
          <div className="col-md-12 text-right">
            <a onClick={this.resetSearchCondition} className="btn btn-default">Reset</a>
          </div>
        </div>

        <SearchTable className="table table-condensed table-responsive search-table"
                     ref="searchTable"
                     onChange={this.debounceHandleSearch}>
          <SearchTableHeader>
            <SearchHeaderColumn attrName="id"
                                column={{ type: 'sortable', sort: 'desc' }}
                                filter={{ type: 'text', className: 'form form-control' }}>
              ID
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="product_id"
                                filter={{ type: 'text', className: 'form form-control' }}>
              ProductID
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="sku"
                                filter={{ type: 'select', className: 'form form-control' }}>
              SKU
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="product_name">
              Product Name
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="variant_name">
              Variant Name
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="price">
              Price
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="available_on">
              Available On
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="created_at">
              Created At
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="updated_at">
              Updated At
            </SearchHeaderColumn>
          </SearchTableHeader>

          <SearchTableBody>
            {rowComponents}
          </SearchTableBody>
        </SearchTable>
      </div>
    )
  }
}