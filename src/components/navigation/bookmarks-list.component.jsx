import icons from "../../images/icons.svg"
import BookmarksListItem from "./bookmarks-list-item.component"
import {useSelector} from "react-redux"

const BookmarksList = ()=>{
  const bookmarks = useSelector(state=> state.bookmarks)
    return (
        <ul className="bookmarks__list">
        {bookmarks.length === 0 && (<div className="message">
          <div>
            <svg>
              <use href={`${icons}#icon-smile`}></use>
            </svg>
          </div>
          <p>
            No bookmarks yet. Find a nice recipe and bookmark it
          </p>
        </div>)}

          {bookmarks.length > 0 && bookmarks.map(bookmark =><BookmarksListItem bookmark={bookmark} key={bookmark.id}/> )}
      </ul>
    )
}

export default BookmarksList