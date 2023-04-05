import {Component} from 'react'

import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class App extends Component {
  state = {
    searchInput: '',
    suggestionsListText: suggestionsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  searchDetails = () => {
    const {suggestionsListText, searchInput} = this.state
    // const {suggestion} = suggestionsListText

    const searchResults = suggestionsListText.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    this.setState({
      suggestionsListText: searchResults,
    })
  }

  render() {
    const {suggestionsListText, searchInput} = this.state
    const searchResults = suggestionsListText.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-icon"
        />
        <div className="search-input">
          <label htmlFor="searchLabel">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search"
            />
          </label>
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            id="searchLabel"
            className="search-input-container"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <GoogleSuggestions
              suggestionsListDetails={eachUser}
              key={eachUser.id}
              searchDetails={this.searchDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

// {/* <GoogleSuggestions suggestionsList={suggestionsList} /> */}

export default App
