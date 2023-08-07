import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const render = (elem, data) => {
  if (elem) {
    console.log('rendering', elem, data)
    ReactDOM.createRoot(elem).render(
      <React.StrictMode>
        <App  />
      </React.StrictMode>,
    )
  }
}
