import { HashRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'
import './App.scss'
import './Markdown.scss'
import { Footer } from './Footer'
import AppInitializer from './AppInitializer'
import { Navbar } from './Navbar'
import BetaBanner from './BetaBanner'
import CookiesNotification from './CookiesNotification'
import { CookiesProvider } from 'react-cookie'
import Home from './Home'
import RouteResolver from './Home'

const App: React.SFC = () => {
  return (
    <CookiesProvider>
      <HashRouter>
        <AppInitializer>
          <BetaBanner/>
          <Navbar/>
          <CookiesNotification />
          <main className="main">
            {/* all the content below */}
            <Switch>
              {/* exact takes precendence over RouteResolver */}
              <Route exact={true} path="/" component={Home}/>
              {/* all other routes handled programatically */}
              <Route path="/" component={RouteResolver}/>
            </Switch>
          </main>
          <Footer/>
        </AppInitializer>
      </HashRouter >
    </CookiesProvider>
  )
}

export default App
