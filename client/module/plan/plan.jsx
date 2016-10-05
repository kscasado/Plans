//Component for displaying the plan

import React from 'react'
import moment from 'moment'
import CreatePlan from './createPlan.jsx'
import { connect } from 'react-redux'
import { getPlan } from '../../actions/planAction.js'
import { Dialog } from 'react-toolbox/lib/dialog'
import { Button, IconButton } from 'react-toolbox/lib/button'
import { Card, CardMedia, CardText, CardActions, CardTitle } from 'react-toolbox/lib/card'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list'
@connect((store) => {
  return {
    plan: store.plan
  }
})
export default class Plan extends React.Component {



  //since this is a "dumb" component we will use setState instead of store
  componentWillMount () {
    this.setState({modalView: false})
  }
  componentWillUnmount () {

  }

  modalActions = [
      {label: 'Close', onClick: this._handleCloseModal.bind(this)}
  ]
  render () {
    const { plan } = this.props
    if (!plan.isFetched) {
      console.log(this.props.params.planID)
      this.props.dispatch(getPlan(this.props.params.planID))
    }
    console.log(plan)
    return (
      <div>
        <Dialog active = {this.state.modalView}
                actions = {this.modalActions}>
                <h2>Add Option</h2>
                <CreatePlan plan={plan}></CreatePlan>
        </Dialog>
        <Card>
          <CardTitle>{plan.groupname}</CardTitle>
          <CardText>
            <strong>When: {moment(plan.date).format('ddd, MMM D hA')} </strong>
            <List>
              <ListSubHeader caption='Options'></ListSubHeader>
              <ListDivider />
              <ListItem>
                <IconButton icon='add' primary onClick={this._showCreatePlanDialog.bind(this)} />

              </ListItem>
              <ListDivider />

            </List>
          </CardText>
        </Card>
      </div>

    )
  }
  _handleCloseModal() {
    this.setState({modalView: false})
    this.props.plan.isFetched = false
  }
  _showCreatePlanDialog () {
    this.setState({modalView: true})
  }

}
