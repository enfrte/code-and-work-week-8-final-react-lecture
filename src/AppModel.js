import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal'; // https://github.com/reactjs/react-modal

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function Model() {
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  const [modalInput,setModalInput] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

  function handleModelForm(e) {
    e.preventDefault();
    setModalInput(e.target.modelInput.value);
    setIsOpen(false); // automatically close, if you want
  }

  return (
    <div className="Model">
      <h1>Model</h1>
      <h3>Modal input: {modalInput}</h3>
      <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <div>Modal Popup</div>
          <form onSubmit={handleModelForm}>
            <input name="modelInput" onKeyUp={ (e) => setModalInput(e.target.value) } />
            <br/><button type="submit" onClick={closeModal}>close</button>
          </form>
        </Modal>
    </div>
  );
}

export default Model;
