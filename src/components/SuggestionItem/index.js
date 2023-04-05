// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionText} = props

  return <p className="suggestion-text">{suggestionText}</p>
}

export default SuggestionItem
