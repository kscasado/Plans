import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Nav from './module/shared/Nav.jsx'
import Layout from './module/shared/Layout.jsx'
import CreatePlan from './module/plan/createPlan.jsx'
import Groups from './module/groups/Groups.jsx'
import PageNotFound from './module/shared/PageNotFound.jsx'
const rootRoute = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={CreatePlan} />
      <Route path='users/:user._id/groups' component={Groups} />
      <Route path='*' handler={PageNotFound} />
    </Route>

  </Router>
)

render(rootRoute, document.getElementById('app'))
