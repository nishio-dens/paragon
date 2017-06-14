import React from 'react'

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
    return columns.map(v => {
      if (v.props.filter) {
        switch (v.props.filter.type) {
          case 'text':
            return (<th>Text</th>)
          case 'select':
            return (<th>Select</th>)
          default:
            return (<th></th>)
        }
      } else {
        return (<th></th>)
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
