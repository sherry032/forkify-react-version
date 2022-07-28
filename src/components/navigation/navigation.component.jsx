import icons from "../../images/icons.svg"
import BookmarksList from "./bookmarks-list.component"
import {useDispatch } from "react-redux"
import { uiActions } from "../../store/ui.slice"
const Navigation = ()=>{
  const dispatch = useDispatch()
  const showModalHandler = ()=>{
    dispatch(uiActions.showModal())
  }
  return(
      <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <button className="nav__btn nav__btn--add-recipe" onClick={showModalHandler}>
                  <svg className="nav__icon">
                    <use href={`${icons}#icon-edit`}></use>
                  </svg>
                  <span>Add recipe</span>
                </button>
              </li>
              <li className="nav__item">
                <button className="nav__btn nav__btn--bookmarks">
                  <svg className="nav__icon">
                    <use href={`${icons}#icon-bookmark`}></use>
                  </svg>
                  <span>Bookmarks</span>
                </button>
                <div className="bookmarks">
                  <BookmarksList />
                </div>
              </li>
            </ul>
          </nav>
  )
}

export default Navigation