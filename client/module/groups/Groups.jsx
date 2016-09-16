import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { addGroup } from '../../actions/userAction'
@connect((store) => {
  return{
    user: store.user
  }
})
export default class Groups extends React.Component {
  componentWillMount () {

  }
  componentWillUnmount () {

  }
  _getGroups () {
    const { userID } = this.props.params
    this.props.params.hasGroups=false;
    return $.get('/api/users/${this.props.params.user._id}/groups', result => {


      if(!result.length==0){
        this.props.params.hasGroups=true;
        this.setState({
          groups: result
        })
      }
    })
  }
  _generateGroupElement(){

  }
  _addGroup(){

    if(!this.props.params.hasGroups){
      this.props.dispatch(addGroup(this.props.user._id,
                                    this.props.user._id, 'Default Group'))
    }
  }
  _generateGroupElement(user){
    if(user.groups.length==0){
      return <br></br>
    }
    else{
      let groupList = []
      for(var group of user.groups){
        const groupElement =
          <div className='mdl-card mdl-cell mdl-shadow--4dp'>
            <div className='mdl-card_title mdl-card--expand'>
              group.groupName
            </div>
          </div>
          groupList.push(groupElement)
      }
      return groupList
    }
  }
  render () {
    const { user } = this.props
    var groupElement = this._generateGroupElement(user)
    var addGroupElement =
      <div className="mdl-typography--text-center">
        <button onClick={this._addGroup.bind(this)} className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
            <i className="material-icons">add</i>
          </button>
        </div>

    return (
      <div>
        <h2>Groups</h2>
        {groupElement}
        {addGroupElement}
      </div>
    )
  }
}
