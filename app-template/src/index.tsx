import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import * as React from 'react'
import { render } from 'react-snapshot'
import App from './App'

render(<App />, document.getElementById('root'))
