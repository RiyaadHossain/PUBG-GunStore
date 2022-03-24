import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Nav from "./Components/Nav/Nav";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  const addToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  return (
    <div>
      <Nav cart={cart} openModal={openModal} />
      <div className="card-container">
        {guns.map((gun) => (
          <Card addToCart={addToCart} guns={gun} />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className="modal-close-button" onClick={closeModal}>
          <CgCloseR size={25} />
        </button>
        {cart.length === 0 && ( // ? confused
          <div className="cart-warning">
            <p> Cart is empty </p>
          </div>
        )}
        <div className="modal-container">
        {cart.map((item) => (
          <div className="model">
            <img width="100px" src={item.img} alt="" />
            <div className="model-para">
              <h2>{item.name}</h2>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Bullet Type:</strong> {item.bullet}</p>
            </div>
          </div>
        ))}
       </div>
      </Modal>
    </div>
  );
}

export default App;
