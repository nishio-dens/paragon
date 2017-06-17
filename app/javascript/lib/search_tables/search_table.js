import React from 'react'

import { SearchHeaderColumn } from './index'

import SimpleColumn from './columns/simple_column'
import SortableColumn from './columns/sortable_column'

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
      const baseColumns = header.props.children
      const columns = this.columnsComponent(baseColumns)
      const needSearchColumns = baseColumns
        .map(v => v.props.filter)
        .some(v => v)

      if (needSearchColumns) {
        const filterColumns = this.filterComponents(baseColumns)
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

  columnsComponent(columns) {
    return columns.map((v, i) => {
      if (v.props.column) {
        const refName = `column_${v.props.attrName}`
        switch (v.props.column.type) {
          case 'simple':
            return (
              <SimpleColumn {...v.props} key={i} ref={refName}>
                {v.props.children}
              </SimpleColumn>
            )
          case 'sortable':
            return (
              <SortableColumn {...v.props} key={i} ref={refName}>
                {v.props.children}
              </SortableColumn>
            )
          default:
            return (<th key={i}>{v.props.children}</th>)
        }
      } else {
        return (<th key={i}>{v.props.children}</th>)
      }
    })
  }

  filterComponents(columns) {
    const onChange = this.props.onChange

    return columns.map((v, i)=> {
      if (v.props.filter) {
        const refName = `filter_${v.props.attrName}`
        switch (v.props.filter.type) {
          case 'text':
            return (<TextFilter key={i} ref={refName} notifyChangeToParent={onChange} {...v.props} />)
          case 'select':
            return (<SelectFilter key={i} ref={refName} notifyChangeToParent={onChange} {...v.props} />)
          default:
            return (<th key={i}></th>)
        }
      } else {
        return (<th key={i}></th>)
      }
    })
  }

  applySearchConditions(conditions) {
    let that = this
    Object.keys(conditions).forEach(key => {
      const value = conditions[key]
      const column = that.refs[`column_${key}`]
      const filter = that.refs[`filter_${key}`]

      if (column) {
        column['applyChange'](value['column']['value'])
      }
      if (filter) {
        filter['applyChange'](value['filter']['value'])
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
