

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground"
      onClick={() => {
        setOpenModal(false);
      }}>
      <div className="modalContainer"
        onClick={e => {
          e.stopPropagation();
        }}>
      
      </div>
    </div>
  )
}

export default Modal
