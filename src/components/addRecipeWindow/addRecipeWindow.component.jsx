import Modal from "../modal/modal.component"
import icons from "../../images/icons.svg"
import {creatRecipe} from "../../store/addRecipe.slice"
import {useDispatch} from "react-redux"
import { uiActions } from "../../store/ui.slice"

const AddRecipeWindow = () => {
    const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault()
        const dataArr = new FormData(e.target)
        const data = Object.fromEntries(dataArr)
        dispatch(creatRecipe(data))
    }

    const closeModalHandler = () => {
        dispatch(uiActions.closeModal())
    }
    return(
            <Modal closeModal= {closeModalHandler}>
                <button className="btn--close-modal" onClick={closeModalHandler}>&times;</button>
                    <form className="upload" onSubmit={submitHandler}>
                        <div className="upload__column">
                        <h3 className="upload__heading">Recipe data</h3>
                        <label>Title</label>
                        <input defaultValue="TEXT23" required name="title" type="text" />
                        <label>URL</label>
                        <input defaultValue="TEXT23" required name="sourceUrl" type="text" />
                        <label>Image URL</label>
                        <input defaultValue="TEXT23" required name="image" type="text" />
                        <label>Publisher</label>
                        <input defaultValue="TEXT23" required name="publisher" type="text" />
                        <label>Prep time</label>
                        <input defaultValue="23" required name="cookingTime" type="number" />
                        <label>Servings</label>
                        <input defaultValue="23" required name="servings" type="number" />
                        </div>
                
                        <div className="upload__column">
                        <h3 className="upload__heading">Ingredients</h3>
                        <label>Ingredient 1</label>
                        <input
                            defaultValue="0.5,kg,Rice"
                            type="text"
                            required
                            name="ingredient-1"
                            placeholder="Format: 'Quantity,Unit,Description'"
                        />
                        <label>Ingredient 2</label>
                        <input
                            defaultValue="1,,Avocado"
                            type="text"
                            name="ingredient-2"
                            placeholder="Format: 'Quantity,Unit,Description'"
                        />
                        <label>Ingredient 3</label>
                        <input
                            defaultValue=",,salt"
                            type="text"
                            name="ingredient-3"
                            placeholder="Format: 'Quantity,Unit,Description'"
                        />
                        <label>Ingredient 4</label>
                        <input
                            type="text"
                            name="ingredient-4"
                            placeholder="Format: 'Quantity,Unit,Description'"
                        />
                        <label>Ingredient 5</label>
                        <input
                            type="text"
                            name="ingredient-5"
                            placeholder="Format: 'Quantity,Unit,Description'"
                        />
                        <label>Ingredient 6</label>
                        <input
                            type="text"
                            name="ingredient-6"
                            placeholder="Format: 'Quantity,Unit,Description'"
                        />
                        </div>
                
                        <button className="btn upload__btn">
                        <svg>
                            <use href={`${icons}#icon-upload-cloud`}></use>
                        </svg>
                        <span>Upload</span>
                        </button>
                    </form>
            </Modal>
    )
}

export default AddRecipeWindow