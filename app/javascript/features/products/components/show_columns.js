import React from 'react';
import {DropdownButton} from 'react-bootstrap'

export default class ShowColumns extends React.Component {
  render () {
    const { columns } = this.props
    let columnComponents = null
    if (columns) {
      columnComponents = columns.map((v, i) => {
        return (
          <li key={i}>
            <a className="small">
              <input type="checkbox"
                     id={v.attrName}
                     onChange={e => console.log(`checked ${v.attrName}`)}
                     checked={v.checked} />
              <span className="ml-5">
              {v.displayName}
              </span>
            </a>
          </li>
        )
      })
    }

    return (
      <DropdownButton title="Show Columns" className="mr-10" id="show-columns">
        { columnComponents }
      </DropdownButton>
    )
  }
}
