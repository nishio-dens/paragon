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
        .map(v => v.props.searchable)
        .some(v => v == true)

      if (needSearchColumns) {
        return (
          <thead>
          <tr>{columns}</tr>
          <tr>{columns}</tr>
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
