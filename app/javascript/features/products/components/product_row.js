import React from 'react'

export default class ProductRow extends React.Component {
  render () {
    const columns = this.props.showColumns.map((v, i) => {
      return (
        <td key={i}>
          { this.props[v] }
        </td>
      )
    })

    return (
      <tr>
        {columns}
      </tr>
    )
  }
}