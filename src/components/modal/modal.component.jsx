import { createPortal } from "react-dom"
import { Fragment } from "react"


const Backdrop = ({closeModal}) => {
    return <div className="overlay" onClick={closeModal}></div>
}


const ModalOverlay = props=>{
    return<div className="add-recipe-window">
        {props.children}
    </div>
    }
    
const portalEl = document.getElementById("overlays")
    
const Modal = ({closeModal, children})=>{

    return(
         <Fragment>
            { createPortal(<Backdrop closeModal={closeModal} />, portalEl)}
            { createPortal(<ModalOverlay >{children}</ModalOverlay>, portalEl)}  
        </Fragment>
        )
    }
    
    export default Modal

