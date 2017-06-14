import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import ProductRow from './components/product_row'
import {
  SearchTable,
  SearchTableHeader,
  SearchHeaderColumn,
  SearchTableBody
} from '../../lib/search_tables'

export default class ProductsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  render() {
    const results = [
      {
        id: 1,
        product_id: 100000,
        sku: "F0000_001",
        product_name: "T-Shirt",
        name: "",
        price: 1000,
        available_on: "",
        created_at: "2017-10-10 00:00:00+0900",
        updated_at: "2017-10-10 00:00:00+0900",
      },
      {
        id: 2,
        product_id: 100000,
        sku: "F0000_001",
        product_name: "T-Shirt",
        name: "Small",
        price: 1000,
        available_on: "",
        created_at: "2017-10-10 00:00:00+0900",
        updated_at: "2017-10-10 00:00:00+0900",
      }
    ]
    const rowComponents = results.map(r => (<ProductRow key={r.id} {...r} />))

    return (
      <div>
        <div className="row mb-5">
          <div className="col-md-12 text-right">
            <a href="#" className="btn btn-default">Reset</a>
          </div>
        </div>

        <SearchTable className="table table-condensed table-responsive search-table">
          <SearchTableHeader>
            <SearchHeaderColumn attrName="id" filter={{ type: 'text', defaultValue: "a" }}>
              ID
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="product_id" filter={{ type: 'text' }}>
              ProductID
            </SearchHeaderColumn>
            <SearchHeaderColumn attrName="sku" filter={{ type: 'select' }}>
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