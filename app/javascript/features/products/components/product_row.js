import React from 'react'

export default class ProductRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{ this.props.id }</td>
        <td>{ this.props.product_id }</td>
        <td>{ this.props.sku }</td>
        <td>{ this.props.product_name }</td>
        <td>{ this.props.name }</td>
        <td>{ this.props.price }</td>
        <td>{ this.props.available_on }</td>
        <td>{ this.props.created_at }</td>
        <td>{ this.props.updated_at }</td>
      </tr>
    )
  }
}