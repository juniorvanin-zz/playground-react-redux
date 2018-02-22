// @flow

import { connect, type MapStateToProps } from 'react-redux'
import MainPage, { type Props } from '../components/mainPage'
import type { State } from './../../types/state'

const mapStateToProps: MapStateToProps<State, {}, Props> = state => (
  {
    items: state.items.availables
  }
)

const connector = connect(mapStateToProps)

export default connector(MainPage)
