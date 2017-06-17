import React from 'react'

import BaseFilter from './base_filter'

export default class SelectFilter extends BaseFilter {
  applyChange(value) {
    console.log("Not Implemented Yet " + value)
  }

  currentCondition() {
    return {
      attrName: this.props.attrName,
      value: "" // Not Implemented Yet
    }
  }

  render() {
    const { defaultValue } = this.props.filter
    const { attrName } = this.props.attrName

    return (
      <th>
        <select className="form form-control" value={defaultValue} />
      </th>
    )
  }
}