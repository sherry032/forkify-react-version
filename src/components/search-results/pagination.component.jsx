import {useSelector, useDispatch} from "react-redux"
import { searchResultsActions } from "../../store/search-results.slice"
import icons from "../../images/icons.svg"
const Pagination = ()=>{
  const dispacth = useDispatch()
  const {page, totalPages} = useSelector(state=> state.search)
  const {incrementPage, decrementPage} = searchResultsActions
  const prevPageHandler = ()=>{
    dispacth(decrementPage())
  }

  const nextPageHandler = ()=>{
    dispacth(incrementPage())
  }
    return(
        <div className="pagination">
          {page > 1 && <button className="btn--inline pagination__btn--prev" onClick={prevPageHandler}>
            <svg className="search__icon">
              <use href={`${icons}#icon-arrow-left`}></use>
            </svg>
            <span>Page {page - 1}</span>
          </button>}
          {page < totalPages && <button className="btn--inline pagination__btn--next" onClick={nextPageHandler}>
            <span>Page {page + 1}</span>
            <svg className="search__icon">
              <use href={`${icons}#icon-arrow-right`}></use>
            </svg>
          </button>}
        </div>
    )
}

export default Pagination