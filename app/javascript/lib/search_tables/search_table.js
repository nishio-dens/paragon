import React from 'react'

export default class SearchTable extends React.Component {
  render () {
    const tableHeader = this.props.children.find(v => v.type.name == "SearchTableHeader")
    const tableBody = this.props.children.find(v => v.type.name == "SearchTableBody")

    return (
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
          <th></th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {tableBody.props.children}
        </tbody>
      </table>
    )
  }
}
