import React from 'react'

import BaseFilter from './base_filter'

export default class SelectFilter extends BaseFilter {
  applyChange(value) {
    console.log("Not Implemented Yet " + value)
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