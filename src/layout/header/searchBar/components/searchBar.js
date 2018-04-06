import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

 handleSubmit = (event) => {
   const searchUrl = `/search?value=${encodeURI(this.state.value)}`
   this.props.searchItemsByWord(this.state.value)
   this.props.history.push(searchUrl)
   event.preventDefault()
 }

 render() {
   return (
     <form className="search-bar" onSubmit={this.handleSubmit} >
       <input
         type="text"
         id="searchInput"
         placeholder="What are you looking for?"
         autoComplete="off"
         onChange={this.handleChange}
         value={this.state.value}
       />
     </form>
   )
 }
}

export default SearchBar
