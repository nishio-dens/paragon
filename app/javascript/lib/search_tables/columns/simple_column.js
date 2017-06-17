import React from 'react'

import BaseColumn from './base_column'

export default class SimpleColumn extends BaseColumn {
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