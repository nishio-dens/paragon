import React from 'react'
import ReactDOM from 'react-dom'

import AdminNavbar from '../components/admin_navbar'

document.addEventListener('turbolinks:load', () => {
  const node = document.getElementById('admin-navbar-component')
  ReactDOM.render(
    <AdminNavbar />,
    node,
  )
})