import icons from "../../images/icons.svg"
import { loadSearchResults } from "../../store/search-results.actions"
import {useDispatch } from "react-redux"
import { useRef } from "react"

const SearchForm = ()=>{
  const dispacth = useDispatch()
  const searchInputRef = useRef()

  const submitHandler = (e) =>{
    e.preventDefault()
    const query = searchInputRef.current.value
    if(query.trim() !== "") dispacth(loadSearchResults(query))
    searchInputRef.current.value = ""
  }
  return(
        <form className="search" onSubmit={submitHandler}>
          <input
            type="text"
            className="search__field"
            placeholder="Search over 1,000,000 recipes..."
            ref={searchInputRef}
          />
          <button className="btn search__btn">
            <svg className="search__icon">
              <use href={`${icons}#icon-search`}></use>
            </svg>
            <span>Search</span>
          </button>
        </form>
  )
}

export default SearchForm