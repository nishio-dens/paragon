import React from 'react'

import BaseColumn from './base_column'

export default class SortableColumn extends BaseColumn {
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