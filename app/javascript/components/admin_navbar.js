import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'
import NavItem from 'react-bootstrap/lib/NavItem'

export default class AdminNavbar extends React.Component {
  render () {
    const loadingIconPath = this.props.assets.loadingIcon
    let loadingIcon = null
    if (this.props.nowLoading) {
      loadingIcon = (
        <NavItem href="#" className="loading">
          <img src={loadingIconPath}></img>
        </NavItem>
      )
    }

    return (
      <Navbar inverse fluid collapseOnSelect className="admin-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Paragon</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              eventKey={1}
              href="/inventories"
              onClick={ _ => Turbolinks.visit("/inventories") }>Inventories
            </NavItem>
          </Nav>
          <Nav>
            <NavItem
              eventKey={1}
              href="/products"
              onClick={ _ => Turbolinks.visit("/products") }>Products
            </NavItem>
          </Nav>
          <Nav pullRight>
            {loadingIcon}
            <NavItem href="#">Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
