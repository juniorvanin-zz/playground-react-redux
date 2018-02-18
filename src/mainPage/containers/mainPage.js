// @flow

import { connect } from 'react-redux'
import MainPage from '../components/mainPage'
import type { State } from './../../types/state'

const mapStateToProps = (state: State) => (
  {
    items: state.items.availables
  }
)

const connector = connect(mapStateToProps)

export default connector(MainPage)
