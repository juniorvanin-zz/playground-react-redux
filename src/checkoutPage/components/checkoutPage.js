import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import Header from './../../header/components/header'

import './../../App.css'
import './../checkoutPage.css'

let CheckoutPage = ({ history }) => (
  <div>
    <Header />
    <section className="checkoutPage">
      <h1>Please enter your personal information</h1>
      <section className="addressInformation">
        <form onSubmit={() => history.push('/')}>
          <div className="col-6">
            <label htmlFor="street">Street and Number
              <Field name="street" component="input" type="text" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="number">Number
              <Field name="number" component="input" type="text" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="neighborhood">Neighborhood
              <Field name="neighborhood" component="input" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="complement">Complement
              <Field name="complement" component="input" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="zipcode">Zip Code
              <Field name="zipcode" component="input" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="country">Country
              <Field name="country" component="input" />
            </label>
          </div>
          <div className="buttonWrapper">
            <button type="submit">Place your order</button>
          </div>
        </form>
      </section>
    </section>
  </div>
)

CheckoutPage = reduxForm({
  form: 'addressInformation'
})(CheckoutPage)

export default withRouter(CheckoutPage)
