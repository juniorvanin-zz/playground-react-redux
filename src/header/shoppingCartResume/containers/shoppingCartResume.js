// @flow

import { connect } from 'react-redux'
import type { MapStateToProps } from 'react-redux'
import ShoppingCartResume, { type Props } from '../components/shoppingCartResume'
import type { State } from './../../../types/state'

const mapStateToProps: MapStateToProps<State, {}, Props> = state => ({
  items: state.items.availables.filter(item => state.shoppingCart.itemsAdded.includes(item.id))
})

const connector = connect(mapStateToProps)
export default connector(ShoppingCartResume)
