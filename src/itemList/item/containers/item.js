// @flow

import { connect, type MapStateToProps } from 'react-redux'
import Item from '../components/item'
import type { State } from './../../../types/state'
import type { Item as ItemType } from './../../../types/domain'

type Props = {
  itemsAddedToCart: Array<number>
}

type OwnProps = {
  item: ItemType
}

const mapStateToProps: MapStateToProps<State, OwnProps, Props> = state => ({
  itemsAddedToCart: state.shoppingCart.itemsAdded
})

const connector = connect(mapStateToProps)

export default connector(Item)
