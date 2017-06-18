import React from 'react'

import BaseColumn from './base_column'

export default class SortableColumn extends BaseColumn {
  constructor(props) {
    super(props)

    this.state = {
      value: String(this.props.column.defaultValue || "")
    }
  }

  applyChange(_) {
  }

  currentCondition() {
    return {
      attrName: this.props.attrName,
      value: this.state.value
    }
  }

  render () {
    let currentClass = (this.props.column.className || "") + ` ${this.state.value}`
    return (
      <th className="sortable">
        <div className={currentClass}>
          {this.props.children}
        </div>
      </th>
    )
  }
}