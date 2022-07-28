import icons from "../../images/icons.svg"

const Spinner = ()=>{
    return(
        <div class="spinner">
          <svg>
            <use href={`${icons}#icon-loader`}></use>
          </svg>
        </div>
    )
}

export default Spinner