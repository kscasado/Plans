import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Nav from './module/shared/Nav.jsx'
import Layout from './module/shared/Layout.jsx'
import CreatePlan from './module/plan/createPlan.jsx'
const rootRoute = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      // <IndexRoute component={Nav} />
      <IndexRoute component={CreatePlan} />
    </Route>
  </Router>
)

render(rootRoute, document.getElementById('app'))
