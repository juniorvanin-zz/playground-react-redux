// @flow

import ShoppingCartResume from '../components/shoppingCartResume'
import { connect } from 'react-redux'
import type { State } from './../../../types/state'

const mapStateToProps = (state: State) => {
  return {
    items: state.items.availables.filter(item => state.form.cart.itemsAdded.includes(item.id))
  }
}

const connector = connect(mapStateToProps)
export default connector(ShoppingCartResume)
