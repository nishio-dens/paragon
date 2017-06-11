import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppStore from '../store/app_store'
import AdminNavbar from '../components/admin_navbar'

document.addEventListener('turbolinks:load', () => {
  const node = document.getElementById('admin-navbar-component')
  ReactDOM.render(
    <Provider store={AppStore}>
      <AdminNavbar />
    </Provider>,
    node,
  )
})