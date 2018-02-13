import React from 'react'

const handleSubmit = (searchItemsByWord) => (evt) => {
  evt.preventDefault()
  searchItemsByWord()
}

const handleOnChange = (updateSearchInput) => (evt) => {
    evt.preventDefault()
    updateSearchInput(evt.target.value)
}

const SearchBar = ({ searchItemsByWord, updateSearchInput, searchInput, searchResultMessage }) => (
  <div className="search-bar">
    <form onSubmit={ handleSubmit(() => searchItemsByWord(searchInput)) } >
      <input
        type="text"
        id="searchInput"
        placeholder="What are you looking for?"
        autoComplete="off"
        onChange={handleOnChange(updateSearchInput)}
        value={ searchInput } />
      <button type="submit">Search</button>
    </form>
    <span> { searchResultMessage } </span>
  </div>
)

export default SearchBar
