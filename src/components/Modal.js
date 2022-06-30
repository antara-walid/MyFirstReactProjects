function Modal(props) {
  return (
    <div className="modal">
      <p>are u sure ???</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        cancel
      </button>
      <button className="btn" onClick={props.onConfirm} >confirm</button>
    </div>
  );
}

export default Modal;
