// Write your code here

import SuggestionItem from '../SuggestionItem'
import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsListDetails, searchDetails} = props
  const {suggestion} = suggestionsListDetails

  const onSearch = () => {
    searchDetails()
  }

  return (
    <li className="arrow-icon-text">
      <SuggestionItem suggestionText={suggestion} />
      <button type="button" className="arrow-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-img"
          alt="arrow"
          onClick={onSearch}
        />
      </button>
    </li>
  )
}
export default GoogleSuggestions
