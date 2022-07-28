import icons from "../../images/icons.svg"
import {useSelector} from "react-redux"
const SearchResultsItem = ({result})=>{
  const {id, image, publisher, title} = result
  const recipeId = useSelector(state=>state.recipe.recipe.id)
  const isActive = id ===recipeId
    return(
        <li className="preview">
            <a className={`preview__link ${isActive && "preview__link--active"}`} href={`#${id}`}>
              <figure className="preview__fig">
                <img src={`${image}`} alt={title} />
              </figure>
              <div className="preview__data">
                <h4 className="preview__title">{title}</h4>
                <p className="preview__publisher">{publisher}</p>
                <div className="preview__user-generated">
                  <svg>
                  <use href={`${icons}#icon-user`}></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    )
}

export default SearchResultsItem