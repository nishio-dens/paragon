import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppStore from '../store/app_store'
import ProductsIndex from '../features/products'

document.addEventListener('turbolinks:load', () => {
  const node = document.getElementById('products-index-component')
  if (node) {
    ReactDOM.render(
      <Provider store={AppStore}>
        <ProductsIndex />
      </Provider>,
      node,
    )
  }
})