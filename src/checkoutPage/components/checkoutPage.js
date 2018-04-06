// @flow

import React from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import type { History } from 'history'

import TextInput from './../../forms/textInput/components/textInput'

import './../../App.css'
import './../checkoutPage.css'

let CheckoutPage = ({ history }: History) => (
  <section className="checkoutPage">
    <h2>Please enter your personal information</h2>
    <section className="addressInformation">
      <form onSubmit={() => history.push('/')}>
        <div className="col-12">
          <TextInput name="fullName" label="Full name" />
        </div>
        <div className="col-6">
          <TextInput name="street" label="Street and Number" />
        </div>
        <div className="col-6">
          <TextInput name="neighborhood" label="Neighborhood" />
        </div>
        <div className="col-6">
          <TextInput name="city" label="City" />
        </div>
        <div className="col-6">
          <TextInput name="state" label="State/Province/Region" />
        </div>
        <div className="col-6">
          <TextInput name="zipcode" label="Zip/Postal Code" />
        </div>
        <div className="col-6">
          <TextInput name="country" label="Country" />
        </div>
        <div className="buttonWrapper">
          <button type="submit">Place your order</button>
        </div>
      </form>
    </section>
  </section>
)

CheckoutPage = reduxForm({
  form: 'addressInformation'
})(CheckoutPage)

export default withRouter(CheckoutPage)
