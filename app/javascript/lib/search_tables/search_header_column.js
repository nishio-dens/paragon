import React from 'react'

export default class SearchHeaderColumn extends React.Component {
  render () {
    return (
      <th>
        {this.props.children}
      </th>
    )
  }
}