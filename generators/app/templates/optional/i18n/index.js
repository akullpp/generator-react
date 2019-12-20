import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './i18n'
import './index.css'
import App from './App'

axios.defaults.baseURL = process.env.REACT_APP_API
axios.interceptors.response.use(response => response.data)

ReactDOM.render(<App />, document.getElementById('root'))
