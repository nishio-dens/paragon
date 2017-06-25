import React from 'react'
import { debounce } from 'lodash'

import ProductRow from './product_row'
import ShowColumns from '../containers/show_columns_container'
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
    this.initialize = this.props.initialize.bind(this)
    this.handleSearch = this.props.handleSearch.bind(this)
    this.debounceHandleSearch = debounce(this.handleSearch, 300)
    this.resetSearchCondition = this.props.resetSearchCondition.bind(this)
  }

  componentDidMount() {
    this.initialize()
  }

  render() {
    const { page, per, results, columns, showColumns } = this.props
    const rowComponents = results.map(r => (<ProductRow showColumns={showColumns} key={r.id} {...r} />))

    return (
      <div>
        <div className="row mb-5">
          <div className="col-md-12 text-right">
            <ShowColumns columns={columns} showColumns={showColumns} onChange={this.props.onChangeShowHideColumns} />

            <a onClick={this.resetSearchCondition} className="btn btn-default">Reset</a>
          </div>
        </div>

        <SearchTable className="table table-condensed table-responsive search-table"
                     ref="searchTable"
                     showColumns={showColumns}
                     onChange={this.debounceHandleSearch}>
          <SearchTableHeader>
            <SearchHeaderColumn attrName="id"
                                column={{ type: 'sortable', defaultValue: 'desc' }}
                                filter={{ type: 'text', className: 'form form-control' }}>
              ID
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="product_id"
                                column={{ type: 'sortable' }}
                                filter={{ type: 'text', className: 'form form-control' }}>
              ProductID
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="sku"
                                column={{ type: 'sortable' }}
                                filter={{ type: 'text', className: 'form form-control' }}>
              SKU
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="product_name"
                                column={{ type: 'sortable' }}
                                filter={{ type: 'text', className: 'form form-control' }}>
              Product Name
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="name"
                                column={{ type: 'sortable' }}
                                filter={{ type: 'text', className: 'form form-control' }}>
              Variant Name
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="price"
                                column={{ type: 'sortable' }}
                                filter={{ type: 'none' }}>
              Price
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="available_on"
                                column={{ type: 'simple' }}
                                filter={{ type: 'none' }}>
              Available On
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="created_at"
                                column={{ type: 'sortable' }}
                                filter={{ type: 'none' }}>
              Created At
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="updated_at"
                                column={{ type: 'sortable' }}
                                filter={{ type: 'none'}}>
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