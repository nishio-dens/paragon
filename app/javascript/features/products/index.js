import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import ProductRow from './components/product_row'

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

        <table className="table table-condensed table-responsive search-table">
          <thead>
          <tr>
            <th>ID</th>
            <th>ProductID</th>
            <th>SKU</th>
            <th>Product Name</th>
            <th>Variant Name</th>
            <th>Price</th>
            <th>Available On</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
          <tr>
            <th><input className="form-control input-sm" /></th>
            <th><input className="form-control input-sm" /></th>
            <th><input className="form-control input-sm" /></th>
            <th><input className="form-control input-sm" /></th>
            <th><input className="form-control input-sm" /></th>
            <th><input className="form-control input-sm" /></th>
            <th><input className="form-control input-sm" /></th>
            <th>
              <div className="form-inline">
              <div className="form-group">
                <DatePicker
                  dateFormat="YYYY/MM/DD"
                  selected={this.state.startDate}
                  onChange={this.handleChange} />
                <DatePicker />
              </div>
              </div>
            </th>
            <th>
              <div className="form-inline">
              <div className="form-group">
                <DatePicker />
                <DatePicker />
              </div>
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
            {rowComponents}
          </tbody>
        </table>
      </div>
    )
  }
}