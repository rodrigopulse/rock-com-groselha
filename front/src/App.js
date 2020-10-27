import React from 'react'
import GlobalStyles from './assets/styles/GlobalStyles'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

//Redux
import { Provider } from 'react-redux';
import Store from './store';

//Commons
import Header from './core/Header'

//Screens
import Home from './screens/Home'

const App = () => (
    <Provider store={Store}>

      <Router>

        <GlobalStyles />

        <Header />

        <Switch>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>

    </Provider>

)

export default App
