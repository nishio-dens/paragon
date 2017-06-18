import React from 'react'

import BaseColumn from './base_column'

export default class SortableColumn extends BaseColumn {
  constructor(props) {
    super(props)

    this.state = {
      value: String(this.props.column.defaultValue || "")
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const resetOther = true
    switch(this.state.value) {
      case "asc":
        this.applyChange("", resetOther)
        break
      case "desc":
        this.applyChange("asc", resetOther)
        break
      default:
        this.applyChange("desc", resetOther)
        break
    }
  }

  applyChange(value, resetOther = false) {
    this.setState({value: value})
    this.props.notifyChangeToParent({
      attrName: this.props.attrName,
      value: value
    }, resetOther)
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
      <th className="sortable" onClick={this.onClick}>
        <div className={currentClass}>
          {this.props.children}
        </div>
      </th>
    )
  }
}