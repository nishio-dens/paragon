import React from 'react'

export default class SearchTableHeader extends React.Component {
  render () {
    return (
      <tr>
      {this.props.children}
      </tr>
    )
  }
}
