import icons from "../../images/icons.svg"
const RecipeMessage = ()=>{
    return(
        <div className="message">
          <div>
            <svg>
              <use href={`${icons}#icon-smile`}></use>
            </svg>
          </div>
          <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </div>
    )
}

export default RecipeMessage