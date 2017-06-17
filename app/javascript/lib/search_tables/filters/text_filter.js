import React from 'react'
import { debounce } from 'lodash'

export default class TextFilter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: String(this.props.filter.defaultValue || "")
    }

    const wait = this.props.filter.wait || 300
    this.notifyChangeToParent = debounce(this.props.notifyChangeToParent, wait)
  }

  onChange(event) {
    const value = event.target.value
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