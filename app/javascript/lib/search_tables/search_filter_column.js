import React from 'react'

export default class SearchFilterColumn extends React.Component {
  render () {
    return (
      <th>
        {this.props.children}
      </th>
    )
  }
}