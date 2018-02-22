// @flow

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import type { History } from 'history'

import Header from './../../header/components/header'

import './../../App.css'
import './../checkoutPage.css'

let CheckoutPage = ({ history }: History) => (
  <div>
    <Header />
    <section className="checkoutPage">
      <h2>Please enter your personal information</h2>
      <section className="addressInformation">
        <form onSubmit={() => history.push('/')}>
          <div className="col-12">
            <label htmlFor="fullName">Full name
              <Field name="fullName" component="input" type="text" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="street">Street and Number
              <Field name="street" component="input" type="text" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="neighborhood">Neighborhood
              <Field name="neighborhood" component="input" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="city">City
              <Field name="city" component="input" type="text" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="state">State/Province/Region
              <Field name="state" component="input" />
            </label>
          </div>
          <div className="col-6">
            <label htmlFor="zipcode">Zip/Postal Code
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
