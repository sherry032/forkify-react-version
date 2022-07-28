import RecipeIngredient from "./recipe-ingredient.component"
const RecipeIngredients = ({ingredients})=>{
    return(
        <div className="recipe__ingredients">
          <h2 className="heading--2">Recipe ingredients</h2>
          <ul className="recipe__ingredient-list">
            {ingredients.map((ingredient, i) => <RecipeIngredient ingredient={ingredient} key={i}/>)}
          </ul>
        </div>
    )
}

export default RecipeIngredients