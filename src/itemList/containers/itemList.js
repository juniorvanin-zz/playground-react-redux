import ItemList from '../components/itemList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

const connector = connect(mapStateToProps)
export default connector(ItemList)
