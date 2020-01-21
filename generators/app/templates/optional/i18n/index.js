import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'normalize.css'

import App from './App'
import { GlobalStyle } from './theme'
import './i18n'

axios.defaults.baseURL = process.env.REACT_APP_API
axios.interceptors.response.use(response => response.data)

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
)
