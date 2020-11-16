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
import Produto from './screens/Produto'

const App = () => (
    <Provider store={Store}>

      <Router>

        <GlobalStyles />

        <Header />

        <Switch>

          <Route path="/produto/:slug"><Produto /></Route>

          <Route path="/"><Home /></Route>

        </Switch>

      </Router>

    </Provider>

)

export default App
