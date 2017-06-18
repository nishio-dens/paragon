import React from 'react'

import BaseColumn from './base_column'

export default class SortableColumn extends BaseColumn {
  applyChange(_) {
  }

  currentCondition() {
    return {
      attrName: this.props.attrName,
      value: { sort: '' }
    }
  }

  render () {
    return (
      <th className="sortable">
        <div className="both desc">
          {this.props.children}
        </div>
      </th>
    )
  }
}