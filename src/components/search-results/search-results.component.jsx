import SearchResultsItem from "./search-results-item.component"
import Pagination from "./pagination.component"
import {useSelector} from "react-redux"

const SearchResults = ()=>{

    const {results, page} = useSelector((state)=> state.search)
    const startIndex = (page - 1) * 10
    const endIndex = page * 10 -1
    const pagedResults = results.slice(startIndex, endIndex)

    return(
        <div className="search-results">
            <ul className="results">
                {pagedResults.map((result, i) => <SearchResultsItem result ={result} key={i}/>)}
            </ul>
            <Pagination />
            <p className="copyright">
                Built by Sherry.
            </p>
        </div>
    )
}

export default SearchResults