import React from 'react'

import TextFilter from './filters/text_filter'
import SelectFilter from './filters/select_filter'

export default class SearchTable extends React.Component {
  searchTableChildren() {
    return React.Children.toArray(this.props.children)
  }

  headerComponent() {
    const children = this.searchTableChildren()
    const header = children.find(v => v.type.name == "SearchTableHeader")

    if (header) {
      const columns = header.props.children;
      const needSearchColumns = columns
        .map(v => v.props.filter)
        .some(v => v)

      if (needSearchColumns) {
        const filterColumns = this.filterComponents(columns)
        return (
          <thead>
          <tr>{columns}</tr>
          <tr>{filterColumns}</tr>
          </thead>
        )
      } else {
        return (
          <thead>
          <tr>{columns}</tr>
          </thead>
        )
      }
    } else {
      return null
    }
  }

  filterComponents(columns) {
    const onChange = this.props.onChange

    return columns.map((v, i)=> {
      if (v.props.filter) {
        switch (v.props.filter.type) {
          case 'text':
            return (<TextFilter key={i} notifyChangeToParent={onChange} {...v.props} />)
          case 'select':
            return (<SelectFilter key={i} notifyChangeToParent={onChange} {...v.props} />)
          default:
            return (<th key={i}></th>)
        }
      } else {
        return (<th key={i}></th>)
      }
    })
  }

  bodyComponent() {
    const children = this.searchTableChildren()
    const body = children.find(v => v.type.name == "SearchTableBody")

    if (body) {
      return (
        <tbody>
          {body.props.children}
        </tbody>
      )
    } else {
      return null
    }
  }

  render () {
    const tableHeader = this.headerComponent()
    const tableBody = this.bodyComponent()

    return (
      <table className={this.props.className}>
        {tableHeader}

        {tableBody}
      </table>
    )
  }
}
