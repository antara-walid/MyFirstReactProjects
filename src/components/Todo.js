// we use capital letters in the begining of the function name so that the component will be different then html
// built in html elements

// we use class atributes to passe data to the components  (props)
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); // always returns an array of two elements

  // this modalIsOpen is later used to define the state using && operators   false && true == false // true && true == true 

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModelHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModelHandler} />}
    </div>
  );
}

export default Todo;
