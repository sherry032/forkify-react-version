import icons from "../../images/icons.svg"
const Error = ()=>{
    return(
        <div class="error">
            <div>
              <svg>
                <use href={`${icons}#icon-alert-triangle`}></use>
              </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
        </div>
    )
}

export default Error