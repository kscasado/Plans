import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Layout from './module/shared/Layout.jsx'
import CreatePlan from './module/plan/createPlan.jsx'
import Groups from './module/groups/Groups.jsx'
import ViewPlans from './module/plan/ViewPlans.jsx'
import LogoutComponent from './module/auth/LogoutComponent.jsx'
import PageNotFound from './module/shared/PageNotFound.jsx'
import Plan from './module/plan/plan.jsx'
import 'react-toolbox/lib/commons.scss'
import store from './store.js'
const history = syncHistoryWithStore(browserHistory, store)
const rootRoute = (
  <Provider store={store}>
  <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={CreatePlan} />
      <Route path='users/:userID/groups' component={Groups} />
      <Route path='users/:userID/plans' component={ViewPlans} />
      <Route path='auth/logout' component={LogoutComponent} />
      <Route path='plans/:planID' component={Plan} />
    <Route path='*' handler={PageNotFound} />

    </Route>

  </Router>
</Provider>
)

ReactDOM.render(rootRoute, document.getElementById('app'))
