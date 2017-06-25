import React from 'react'

import BaseFilter from './base_filter'

export default class NoneFilter extends BaseFilter {
  constructor(props) {
    super(props)

    this.state = {
      attrName: this.props.attrName,
      value: ""
    }
  }

  onChange(event) {
  }

  applyChange(value) {
  }

  currentCondition() {
    return {
      attrName: this.props.attrName,
      value: null
    }
  }

  render() {
    const { className } = this.props

    return (
      <th className={className}>
      </th>
    )
  }
}