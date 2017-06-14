import React from 'react'

export default class SelectFilter extends React.Component {
  render() {
    const { defaultValue } = this.props.filter
    const { attrName } = this.props.attrName

    return (
      <th>
        <select className="form form-control" value={defaultValue} />
      </th>
    )
  }
}