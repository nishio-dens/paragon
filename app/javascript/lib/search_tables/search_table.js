import React from 'react'

import SimpleColumn from './columns/simple_column'
import SortableColumn from './columns/sortable_column'

import TextFilter from './filters/text_filter'
import SelectFilter from './filters/select_filter'

export default class SearchTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCondition: {}
    }

    this.changeColumnCondition = this.changeColumnCondition.bind(this)
    this.changeFilterCondition = this.changeFilterCondition.bind(this)
  }

  componentDidMount() {
    this.setState({
      currentCondition: this.searchConditions()
    })
  }

  searchTableChildren() {
    return React.Children.toArray(this.props.children)
  }

  headerComponent() {
    const children = this.searchTableChildren()
    const header = children.find(v => v.type.name == "SearchTableHeader")

    if (header) {
      const baseColumns = header.props.children
      const columns = this.columnsComponent(baseColumns)
      const needSearchColumns = baseColumns
        .map(v => v.props.filter)
        .some(v => v)

      if (needSearchColumns) {
        const filterColumns = this.filterComponents(baseColumns)
        return (
          <thead>
          <tr>{columns}</tr>
          <tr>{filterColumns}</tr>
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

  columnsComponent(columns) {
    const onChange = this.changeColumnCondition

    return columns.map((v, i) => {
      if (v.props.column) {
        const refName = `column_${v.props.attrName}`
        switch (v.props.column.type) {
          case 'simple':
            return (
              <SimpleColumn key={i} ref={refName} notifyChangeToParent={onChange} {...v.props}>
                {v.props.children}
              </SimpleColumn>
            )
          case 'sortable':
            return (
              <SortableColumn key={i} ref={refName} notifyChangeToParent={onChange} {...v.props} >
                {v.props.children}
              </SortableColumn>
            )
          default:
            return (<th key={i}>{v.props.children}</th>)
        }
      } else {
        return (<th key={i}>{v.props.children}</th>)
      }
    })
  }

  filterComponents(columns) {
    const onChange = this.changeFilterCondition

    return columns.map((v, i)=> {
      if (v.props.filter) {
        const refName = `filter_${v.props.attrName}`
        switch (v.props.filter.type) {
          case 'text':
            return (<TextFilter key={i} ref={refName} notifyChangeToParent={onChange} {...v.props} />)
          case 'select':
            return (<SelectFilter key={i} ref={refName} notifyChangeToParent={onChange} {...v.props} />)
          default:
            return (<th key={i}></th>)
        }
      } else {
        return (<th key={i}></th>)
      }
    })
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

  applySearchConditions(conditions) {
    let that = this
    Object.keys(conditions).forEach(key => {
      const value = conditions[key]
      const column = that.refs[`column_${key}`]
      const filter = that.refs[`filter_${key}`]

      if (column) {
        column['applyChange'](value['column']['value'])
      }
      if (filter) {
        filter['applyChange'](value['filter']['value'])
      }
    })
  }

  searchConditions() {
    let conditions = {}
    let that = this
    Object.keys(this.refs).forEach(key => {
      if (key.startsWith("column_")) {
        const cond = that.refs[key].currentCondition()

        if (!conditions[cond.attrName]) { conditions[cond.attrName] = {} }
        conditions[cond.attrName]['column'] = cond
      } else if (key.startsWith("filter_")) {
        const cond = that.refs[key].currentCondition()

        if (!conditions[cond.attrName]) { conditions[cond.attrName] = {} }
        conditions[cond.attrName]['filter'] = cond
      }
    })
    return conditions
  }

  search() {
    this.props.onChange(this.state.currentCondition)
  }

  changeColumnCondition(value) {
    let cond = this.state.currentCondition
    cond[value.attrName]['column'] = value

    this.setState({currentCondition: cond})
    this.props.onChange(cond)
  }

  changeFilterCondition(value) {
    let cond = this.state.currentCondition
    cond[value.attrName]['filter'] = value

    this.setState({currentCondition: cond})
    this.props.onChange(cond)
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
