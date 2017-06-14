import React from 'react'

export default class TextFilter extends React.Component {
  render() {
    const { defaultValue, className } = this.props.filter
    const { attrName } = this.props.attrName

    return (
      <th>
        <input className={className} value={defaultValue} />
      </th>
    )
  }
}