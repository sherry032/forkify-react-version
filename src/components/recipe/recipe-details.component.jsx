import icons from "../../images/icons.svg"
import { recipeActions } from "../../store/recipe.slice"
import {useDispatch} from "react-redux"
import { bookmarksActions } from "../../store/bookmarks.slice"
import {useSelector} from "react-redux"
const RecipeDetails = ({recipe})=>{
  const {cookingtime, servings, id} = recipe
  const dispacth = useDispatch()
  const increaseHandler = ()=>{
    dispacth(recipeActions.increaseServings())
  }

  const decreaseHandler = ()=>{
    dispacth(recipeActions.decreaseServings())
  }

  const toggleBookmarkHandler = ()=>{
    dispacth( bookmarksActions.toggleBookmark(recipe))
  }

  const bookmarks = useSelector(state => state.bookmarks)

  const bookmarked = bookmarks.find(bookmark => bookmark.id === id)
      return(
        <div className="recipe__details">
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href={`${icons}#icon-clock`}></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">{cookingtime}</span>
            <span className="recipe__info-text">minutes</span>
          </div>
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href={`${icons}#icon-users`}></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">{servings}</span>
            <span className="recipe__info-text">servings</span>

            <div className="recipe__info-buttons">
              <button className="btn--tiny btn--decrease-servings" onClick={decreaseHandler}>
                <svg>
                  <use href={`${icons}#icon-minus-circle`}></use>
                </svg>
              </button>
              <button className="btn--tiny btn--increase-servings" onClick={increaseHandler}>
                <svg>
                  <use href={`${icons}#icon-plus-circle`}></use>
                </svg>
              </button>
            </div>
          </div>

          <div className="recipe__user-generated">
            <svg>
              <use href={`${icons}#icon-user`}></use>
            </svg>
          </div>
          <button className="btn--round" onClick={toggleBookmarkHandler}>
            <svg className="">
              <use href={`${icons}#icon-bookmark${bookmarked ? "-fill" : ""}`}></use>
            </svg>
          </button>
        </div>
    )
}

export default RecipeDetails