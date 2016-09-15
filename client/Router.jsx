import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Layout from './module/shared/Layout.jsx'
import CreatePlan from './module/plan/createPlan.jsx'
import Groups from './module/groups/Groups.jsx'
import PageNotFound from './module/shared/PageNotFound.jsx'
import store from './store.js'
const history = syncHistoryWithStore(browserHistory, store)
const rootRoute = (
  <Provider store={store}>
  <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={CreatePlan} />
      <Route path='users/:userID/groups' component={Groups} />
      <Route path='hello' component={Groups} />
      <Route path='*' handler={PageNotFound} />
    </Route>

  </Router>
</Provider>
)

ReactDOM.render(rootRoute, document.getElementById('app'))
