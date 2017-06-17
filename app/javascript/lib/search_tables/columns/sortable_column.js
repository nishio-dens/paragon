import React from 'react'

export default class SortableColumn extends React.Component {
  applyChange(_) {
  }

  render () {
    return (
      <th>
        {this.props.children}
      </th>
    )
  }
}