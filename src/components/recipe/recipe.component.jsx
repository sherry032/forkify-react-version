import RecipeDirections from "./recipe-directions.component"
import RecipeIngredients from "./recipe-ingredients.component"
import RecipeDetails from "./recipe-details.component"
import { loadRecipe } from "../../store/recipe.actions"
import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
const Recipe = ({recipeId})=>{
    const dispacth = useDispatch()
    useEffect(()=>{
        dispacth(loadRecipe(recipeId))
    },[dispacth, recipeId])
    const {recipe} = useSelector(state=> state.recipe)
    const { image, publisher, url, title, ingredients} = recipe
    return(
        <div className="recipe">
            <figure className="recipe__fig">
                <img src={image} alt="Tomato" className="recipe__img" />
                <h1 className="recipe__title">
                    <span>{title}</span>
                </h1>
            </figure>
            <RecipeDetails  recipe={recipe}/>
            {ingredients && <RecipeIngredients ingredients={ingredients} />}
            <RecipeDirections image={image} publisher={publisher} url={url}/>
        </div>
    )
}

export default Recipe