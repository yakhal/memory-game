import "./Modal.css";

function Modal(props) {
    return (
        <div className="overlay">
            <div className='modal'>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;