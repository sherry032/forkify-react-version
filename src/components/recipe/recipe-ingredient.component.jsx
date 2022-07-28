import icons from "../../images/icons.svg"

const RecipeIngredient = ({ingredient})=>{
  const {quantity, unit, description} = ingredient
    return(
        <li className="recipe__ingredient">
              <svg className="recipe__icon">
                <use href={`${icons}#icon-check`}></use>
              </svg>
              <div className="recipe__quantity">{quantity ? quantity.toString() : ""}</div>
              <div className="recipe__description">
                <span className="recipe__unit">{unit}</span>
                {` ${description}`}
              </div>
        </li>
    )
}

export default RecipeIngredient