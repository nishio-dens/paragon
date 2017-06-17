import React from 'react'

export default class TextFilter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: String(this.props.filter.defaultValue || "")
    }

    this.notifyChangeToParent = this.props.notifyChangeToParent
  }

  onChange(event) {
    const value = event.target.value
    this.applyChange(value)
  }

  applyChange(value) {
    this.setState({value: value})
    this.notifyChangeToParent({
      attribute: this.props.attrName,
      value: value
    })
  }

  render() {
    const { className, placeholder } = this.props.filter

    return (
      <th>
        <input
          className={className}
          value={this.state.value}
          placeholder={placeholder}
          onChange={e => this.onChange(e)} />
      </th>
    )
  }
}