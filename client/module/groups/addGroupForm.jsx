import React from 'react'
import {Field, reduxForm } from 'redux-form'

const AddGroupForm = (props) => {
  const {handleSubmit} = props
  return (
      <form onSubmit={handleSubmit}>
        <div className="mdl-typography--text-center">
          <Field component="input" className='mdl-textfield__input' placeholder='Enter New Group Name' name='NewGroupName' />
          <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i className="material-icons">add</i>
          </button>
        </div>


    </form>
  )
}

export default reduxForm({
  form: 'AddGroupForm',
})(AddGroupForm)
