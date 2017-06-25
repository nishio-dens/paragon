import React from 'react';
import {DropdownButton} from 'react-bootstrap'

export default class ShowColumns extends React.Component {
  onChange(id, checked) {
    if (this.props.onChange) {
      this.props.onChange(id, checked)
    }
  }

  onToggle(id) {
    let checked = !this.props.columns[id].checked
    if (this.props.onChange) {
      this.props.onChange(id, checked)
    }
  }

  render () {
    const { columns } = this.props
    let keys = Object.keys(columns)
    let columnComponents = keys.map((key, i) => {
      let v = columns[key]
      let attrName = key
      return (
        <li key={i} onClick={_ => this.onToggle(key)}>
          <a className="small">
            <input type="checkbox"
                   key={attrName}
                   onChange={e => this.onChange(key, e.target.checked)}
                   checked={v.checked} />
            <label className="ml-5">
              {v.displayName}
            </label>
          </a>
        </li>
      )
    })

    return (
      <DropdownButton title="Show Columns" className="mr-10" id="show-columns">
        { columnComponents }
      </DropdownButton>
    )
  }
}
