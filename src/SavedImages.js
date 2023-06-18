import  Modal  from "react-modal"
import { useState } from "react"

Modal.setAppElement('#root')

function SavedImages(){

    const [modalOpen, setOpen] = useState(false)

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
    }

    return (
        <div className="container">
           <button onClick={openModal}>Saved Images</button>
           <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="modal-images"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <h1>Saved Images</h1>

                <button onClick={closeModal}>Close</button>

            </Modal>

        </div>
    )
}

export default SavedImages;