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
    switch(this.state.value) {
      case "asc":
        this.applyChange("")
        break
      case "desc":
        this.applyChange("asc")
        break
      default:
        this.applyChange("desc")
        break
    }
  }

  applyChange(value) {
    this.setState({value: value})
    this.props.notifyChangeToParent({
      attrName: this.props.attrName,
      value: value
    })
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
        <div className={currentClass} onClick={this.onClick}>
          {this.props.children}
        </div>
      </th>
    )
  }
}