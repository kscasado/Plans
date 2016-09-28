import React from 'react'
import {Field, reduxForm } from 'redux-form'
//  form using redux-form to handle adding a group
const AddMemberForm = (props) => {
  const {handleSubmit} = props
  return (
      <form onSubmit={handleSubmit}>
        <div className="mdl-typography--text-center">
          <Field component="input" className='mdl-textfield__input' placeholder='Add Member: Enter Member E-mail' name='memberEmail' />
          <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i className="material-icons">add</i>
          </button>
        </div>
      </form>
  )
}

export default reduxForm({
  form: 'AddMemberForm'
})(AddMemberForm)
