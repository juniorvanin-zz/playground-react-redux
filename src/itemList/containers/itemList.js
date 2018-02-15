// @flow

import { connect } from 'react-redux'
import ItemList from '../components/itemList'
import type { State } from './../../types/state'

const mapStateToProps = (state: State) => state

const connector = connect(mapStateToProps)

export default connector(ItemList)
