import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppStore from '../store/app_store'
import AdminNavbar from '../containers/admin_navbar_container'

document.addEventListener('turbolinks:load', () => {
  const node = document.getElementById('admin-navbar-component')
  const serverNode = document.getElementById('server-side-contents')
  const serverData = JSON.parse(serverNode.innerText)
  if (node) {
    ReactDOM.render(
      <Provider store={AppStore}>
        <AdminNavbar {...serverData} />
      </Provider>,
      node,
    )
  }
})