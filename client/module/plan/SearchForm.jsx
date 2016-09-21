import React from 'react'
import {Field, reduxForm } from 'redux-form'

const SearchForm = (props) => {
  const {handleSubmit} = props
  return (
      <form onSubmit={handleSubmit}>
      <div>
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <label htmlFor='searchTerm' className='mdl-textfield__label'> Enter Search Term </label>
          <Field component="input" type="text" className='mdl-textfield__input'  placeholder='Enter Search Term' name='searchTerm' />
          </div>
          <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>

          <label htmlFor='locationTerm' className='mdl-textfield__label'> Enter Location </label>
          <Field component="input" type="text" className='mdl-textfield__input' placeholder='Enter Location' name='locationTerm' />
          </div>
          <div className='text-center'>
          <button type="submit" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">search</i>

          </button>
        </div>
      </div>

    </form>
  )
}

export default reduxForm({
  form: 'SearchForm',
})(SearchForm)
