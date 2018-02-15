// @flow

import ItemList from '../components/itemList'
import { connect } from 'react-redux'
import type { State } from './../../types/state'

const mapStateToProps = (state: State) => state

const connector = connect(mapStateToProps)

export default connector(ItemList)
